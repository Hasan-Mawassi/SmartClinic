import { Router } from "express";
import * as chatBotContrller from "../Controllers/chatbotController.js";

const chatRouter = Router();

chatRouter.post("/chat", chatBotContrller.textChatBot);
chatRouter.post("/voice", chatBotContrller.voiceTranscribe);

export default chatRouter;