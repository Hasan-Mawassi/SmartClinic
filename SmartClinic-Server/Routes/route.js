import { Router } from "express";
import AuthRouter from "./authRoute.js";
import chatRouter from "./chatBotRoute.js";
const Routes = Router();

Routes.use('/api/v1/auth',AuthRouter);
Routes.use('/api/v1/ai',chatRouter);
export default Routes;