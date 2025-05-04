import OpenAI from 'openai';
import dotenv from 'dotenv';
import { generateAvailableSlots } from '../Services/openAi/slots.js';
dotenv.config();
// import prisma from '../db/client.js';

const client  = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function extractDateFromText(userMessage) {
    const today = new Date().toISOString().split('T')[0]; 
  const aiResponse = await client.responses.create({
    model:  "gpt-4.1",
    input: [
      {
        role: "developer",
        content: `Today is ${today}. Extract the date from the message.
Return it in ISO 8601 format (e.g., 2025-05-05). Reply ONLY with the date.`,
      },
      { role: 'user', content: userMessage },
    ],
  });

  return aiResponse.output_text; 
} 
let chat =await extractDateFromText("I want to book an appointment for next tuesday at 3 PM")
console.log(chat); // Output: 2025-05-05
const slots = await generateAvailableSlots({
  doctorId: 1,
  dateISO: chat,
  startTime: '09:00',
  endTime: '18:00',
  slotDurationMinutes: 30,
});
console.log(slots);
