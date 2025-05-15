import OpenAI from 'openai';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
import fs from 'fs';
dotenv.config();
const client  = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export const  extractDateFromText = async(userMessage) => {
    const today = new Date().toISOString().split('T')[0]; 
    const prompt = `Today is ${today}. Extract the date from the message.
                     Return it in ISO 8601 format (e.g., 2025-05-05). Reply ONLY with the date.`
  const aiResponse = await client.responses.create({
    model:  "gpt-4.1",
    input: [
      {
        role: "developer",
        content: prompt,
      },
      { role: 'user', content: userMessage },
    ],
  });

  return aiResponse.output_text; 
} 


export const  generateAppointmentList =async ( date,availableTime) =>{
const appointmentPrompt = `
                The user wants an appointment on ${new Date(date).toDateString()}.
                Here are the available times:
                ${availableTime}
                Reply with a friendly message listing the options and asking the user to pick one by number.
                `;
  const aiResponse = await client.responses.create({
    model:  "gpt-4.1",
    input: [
      { role: 'developer', content: 'You help users book appointments.' },
      { role: 'user', content: appointmentPrompt },
    ],
  });
  return aiResponse.output_text;
}

export const bookAppointmentByIndex=async (available, index, userName,doctorId)=> {
    const chosen = available[index];
    if (!chosen) return null;
  console.log("doctorid",doctorId)
    return await prisma.appointment.create({
        data: {
          doctorId,
          patientId:userName,
          dateTime: chosen,
          status : 'pending',
          bookedVia:'text',
          symptoms:null,
        },
      });
  }

  export const transcribeWithWhisper = async (filePath) =>{
    const response = await client.audio.translations.create({
      file: fs.createReadStream(filePath),
      model: 'whisper-1'
    });
    return response.text;
  }