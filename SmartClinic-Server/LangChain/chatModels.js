import { initChatModel } from "langchain/chat_models/universal";

export const gpt = await initChatModel("gpt-4.1", {
  temperature: 0,
});