import { gpt } from "./chatModels.js";
import { ToolMessage } from "@langchain/core/messages"; 
import { get_available_slots, book_appointemnt } from "./tools.js";




export const handleChatWithAI = async ( userId,userInput,doctor) => {
    const tools = {
    getSlots: get_available_slots(doctor),
    bookSlot: book_appointemnt(userId, doctor),
  };
  const llmWithTools = gpt.bindTools([tools.getSlots, tools.bookSlot]);
  const initialResponse = await llmWithTools.invoke(userInput);
  const toolCall = initialResponse.tool_calls?.[0];
  if (toolCall) {
    let toolOutput = "";

    if (toolCall.name === "get_available_slots") {
      toolOutput = await  tools.getSlots.invoke(toolCall.args);
    } else if (toolCall.name === "book_appointemnt") {
      toolOutput = await tools.bookSlot.invoke(toolCall.args);
    }

    // const finalResponse = await llmWithTools.invoke([
    //   initialResponse,
    //   new ToolMessage({
    //     tool_call_id: toolCall.id,
    //     content: toolOutput,
    //   }),
    // ]);
    const finalResponse=  toolOutput
    return finalResponse;
  }

  return initialResponse.content;
};