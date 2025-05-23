import { Router } from "express";
import * as chatBotContrller from "../Controllers/chatbotController.js";
import { textChatValidator } from "../Requests/chatbotValidator/textChatValidator.js";
import { validate } from "../Middleware/validate.js";
import { voiceChatValidator } from "../Requests/chatbotValidator/voiceChatValidator.js";
const chatRouter = Router();

chatRouter.post("/chat",textChatValidator,validate, chatBotContrller.textChatBot);
chatRouter.post("/lang/chat", textChatValidator,validate,chatBotContrller.langChainChatbot);
chatRouter.post("/voice",voiceChatValidator,validate, chatBotContrller.voiceTranscribe);
chatRouter.post("/lang/voice",voiceChatValidator,validate, chatBotContrller.langChainVoiceChatbot);

export default chatRouter;