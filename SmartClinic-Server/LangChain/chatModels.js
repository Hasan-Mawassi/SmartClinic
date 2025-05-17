import { initChatModel } from "langchain/chat_models/universal";

export const gpt = await initChatModel("gpt-4o-mini", {
  temperature: 0,
});