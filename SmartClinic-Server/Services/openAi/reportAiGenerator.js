import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const client  = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
 export const  generateOverviewReport =async ( report) =>{
const reportPrompt = generatePatientPrompt(report) ;
  const aiResponse = await client.responses.create({
    model:  "gpt-4.1",
    input: [
      { role: 'developer', content: 'You are a helpful and professional medical assistant that help doctor generate reports.' },
      { role: 'user', content: reportPrompt },
    ],
    temperature: 0.7,
  });
  return aiResponse.output_text;
}









export  const generatePatientPrompt = (report) =>{
  return `
Patient Report Summary

Name: ${report.name}

Chronic Diseases:
- ${report.chronicDiseases.join("\n- ") || "None"}

Allergies:
- ${report.allergies.join("\n- ") || "None"}

Recent Treatments:
${report.recentVital.map(t => `- (${t.date}) heart rate ${t.heartRate} bood pressure ${t.bloodPressure} `).join("\n")  || "None"}

Recent Medications:
${report.recentMedications.map(m => `- ${m.name} (${m.dosage}) start date ${m.startDate} `).join("\n") || "None"}

Please write a concise and professional summary of this patient’s current medical condition, including any important risks,
 make as much as posibile brief report.
  `;
}