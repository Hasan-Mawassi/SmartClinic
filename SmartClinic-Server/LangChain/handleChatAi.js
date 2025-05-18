


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