import { tool } from "@langchain/core/tools";
import { z } from "zod";
import {  bookAppointmentByIndex   } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots} from '../Services/openAi/slots.js';
import { extractDateFromText } from "./chatModelFunctions.js";
import { timeList } from "../utils/timeList.js";


let available = []; 
const textSchema = z.object({
  text: z.string().describe("text to extract date from it"),

});

// Get available slots tool
export const get_available_slots =(doctor )=> tool(
  async ({ text }) => {
    const date = await extractDateFromText(text);
    available = await generateAvailableSlots({
      doctorId: doctor.id,
      dateISO: date,
      startTime: doctor.startTime,
      endTime: doctor.endTime,
      slotDurationMinutes: doctor.slotDuration,
    });
  const availableSlots =   timeList(available)
 return {
            date: date,
            message: `Available slots  on ${date}:`,
            available_slots: availableSlots
         ,
        };

  },
  {
    name: "get_available_slots",
    description: `Today is ${new Date().toISOString().split("T")[0]}. Extract a date from the user message and return the available time slots for the doctor on that date in a numbered list.`,
    schema: textSchema,
  }
);


const bookSchema = z.object({
  index: z.number().describe("The index of the slot to book, base 0"),

});

// book the selected appointemnt tool
export const book_appointemnt =(userId, doctor) => tool(
  async ({ index }) => {
    if (!available.length) {
      return "No available slots. Ask for available slots first.";
    }

    const result = await bookAppointmentByIndex(available, index, userId, doctor.id);
    console.log(result)
    return {
        appointment_details: {
                date: new Date(result.dateTime).toISOString().split("T")[0],
                time: new Date(result.dateTime).toISOString().split("T")[1],
                status: result.status
            },
         };
  },
  {
    name: "book_appointemnt",
   description: `Book a doctor's appointment by selecting an index from the previously listed available slots. Only use this after listing slots.`,
    schema: bookSchema,
  }
);



