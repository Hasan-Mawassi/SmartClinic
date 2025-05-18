import { gpt } from "./chatModels.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";


export const  extractDateFromText = async(userMessage) => {
    const today = new Date().toISOString().split('T')[0]; 
    const prompt = `Today is ${today}. Extract the date from the message.
                     Return it in ISO 8601 format (e.g., 2025-05-05). Reply ONLY with the date.`
  const aiResponse = await gpt.invoke([
  new SystemMessage(prompt),
  new HumanMessage(userMessage),
]);

  return aiResponse.content; 
} 
