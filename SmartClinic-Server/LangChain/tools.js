import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolMessage } from "@langchain/core/messages"; 
import { extractDateFromText, bookAppointmentByIndex, generateAppointmentList } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots } from '../Services/openAi/slots.js';
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const textSchema = z.object({
  text: z.string().describe("text to extract date from it"),
});

const get_available_slots = tool(
  async ({ text }) => {
    const date = await extractDateFromText(text);
    const slots = await generateAvailableSlots({
      doctorId: 1,
      dateISO: date,
      startTime: "8:00",
      endTime: "18:00",
      slotDurationMinutes: 30,
    });
    return `Available slots on ${date}: ${slots.join(", ")}`;
  },
  {
    name: "get_available_slots",
    description: `Today is ${new Date().toISOString().split("T")[0]}. Extract the date from the message and return available time slots in a numbered list.`,
    schema: textSchema,
  }
);

const llmWithTools = llm.bindTools([get_available_slots]);

export  const  handleChatWithAI = async (userInput)=> {
  const initialResponse = await llmWithTools.invoke(userInput);
  const toolCall = initialResponse.tool_calls?.[0];

  if (toolCall && toolCall.name === "get_available_slots") {
    const toolOutput = await get_available_slots.invoke(toolCall.args);

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
}
