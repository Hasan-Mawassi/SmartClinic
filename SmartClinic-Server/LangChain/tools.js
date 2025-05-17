import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { ToolMessage } from "@langchain/core/messages"; 
import { extractDateFromText, bookAppointmentByIndex, generateAppointmentList } from '../Services/openAi/openAiService.js';
import { generateAvailableSlots } from '../Services/openAi/slots.js';
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0
});

const textSchema = z.object({
  text: z.string().describe("text to extract date from it"),
});

const get_date_from_text = tool(
  async ({ text }) => {
    const date = await extractDateFromText(text);
    return date
  },
  {
    name: "get_date_from_text",
    description: `Today is ${new Date().toISOString().split('T')[0]}. Extract the date from the message.
                     Return it in ISO 8601 format (e.g., 2025-05-05). Reply ONLY with the date.`,
    schema: textSchema,
  }
);
 
const llmWithTools = llm.bindTools([get_date_from_text]);

const initialResponse  = await llmWithTools.invoke("What are the date next tuesday");
const toolCall = initialResponse.tool_calls?.[0];

if (toolCall) {
  // STEP 2: Run the requested tool manually
  let toolOutput = "";

  if (toolCall.name === "get_date_from_text") {
    toolOutput = await get_date_from_text.invoke(toolCall.args);
  }
  const finalResponse = await llmWithTools.invoke([
      initialResponse,
       new ToolMessage({
    tool_call_id: toolCall.id,     // required
    content: toolOutput,           // the output from the tool, e.g., "2025-05-20"
  }),
    ]);
      console.log("✅ Final AI Message:", finalResponse.content);
} else {
  console.log("🤖 No tool call. Final AI Message:", initialResponse.content);
}
