import { Router } from "express";
import * as chatBotContrller from "../Controllers/chatbotController.js";

const chatRouter = Router();

chatRouter.post("/chat", chatBotContrller.textChatBot);

export default chatRouter;