import { Router } from "express";
import * as chatBotContrller from "../Controllers/chatbotController.js";
import { textChatValidator } from "../Requests/chatbotValidator/textChatValidator.js";
import { validate } from "../Middleware/validate.js";
import { voiceChatValidator } from "../Requests/chatbotValidator/voiceChatValidator.js";
const chatRouter = Router();

chatRouter.post("/chat",textChatValidator,validate, chatBotContrller.textChatBot);
chatRouter.post("/voice",voiceChatValidator,validate, chatBotContrller.voiceTranscribe);

export default chatRouter;