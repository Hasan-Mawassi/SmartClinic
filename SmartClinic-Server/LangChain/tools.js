import { tool } from "@langchain/core/tools";
import { gpt } from "./chatModels.js";
import { z } from "zod";
import { ToolMessage } from "@langchain/core/messages"; 
import { extractDateFromText, bookAppointmentByIndex, generateAppointmentList } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots } from '../Services/openAi/slots.js';

let available = []; 

const textSchema = z.object({
  text: z.string().describe("text to extract date from it"),

});
const get_available_slots =(doctor)=> tool(
  async ({ text }) => {
    const date = await extractDateFromText(text);
    available = await generateAvailableSlots({
      doctorId: doctor.id,
      dateISO: date,
      startTime: doctor.startTime,
      endTime: doctor.endTime,
      slotDurationMinutes: doctor.slotDuration,
    });

    // Return slots as a numbered list
    return `Available slots on ${date}:\n` + available.map((slot, i) => `${i}. ${slot}`).join("\n");
  },
  {
    name: "get_available_slots",
    description: `Today is ${new Date().toISOString().split("T")[0]}. Extract the date from the message and return available time slots in a numbered list.`,
    schema: textSchema,
  }
);

const bookSchema = z.object({
  index: z.number().describe("The index of the slot to book, base 0"),

});

const book_appointemnt =(userId, doctor) => tool(
  async ({ index }) => {
    if (!available.length) {
      return "No available slots. Ask for available slots first.";
    }

    const result = await bookAppointmentByIndex(available, index, userId, doctor.id);

    return `Appointment booked at ${available[index]}  ${result}`;
  },
  {
    name: "book_appointemnt",
    description: `Book an appointment by choosing a slot index. Make sure to use base 0 index from the latest available slots.`,
    schema: bookSchema,
  }
);



export const handleChatWithAI = async ( userId,userInput,doctor) => {
    const llmWithTools = gpt.bindTools([ get_available_slots(doctor),
    book_appointemnt(userId, doctor),]);
  const initialResponse = await llmWithTools.invoke(userInput);
  const toolCall = initialResponse.tool_calls?.[0];

  if (toolCall) {
    let toolOutput = "";

    if (toolCall.name === "get_available_slots") {
      toolOutput = await  get_available_slots(doctor).invoke(toolCall.args);
    } else if (toolCall.name === "book_appointemnt") {
      toolOutput = await book_appointemnt(userId, doctor).invoke(toolCall.args);
    }

    const finalResponse = await llmWithTools.invoke([
      initialResponse,
      new ToolMessage({
        tool_call_id: toolCall.id,
        content: toolOutput,
      }),
    ]);

    return finalResponse.content;
  }

  return initialResponse.content;
};