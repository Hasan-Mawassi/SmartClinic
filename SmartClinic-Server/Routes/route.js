import { Router } from "express";
import AuthRouter from "./authRoute.js";
import chatRouter from "./chatBotRoute.js";
import doctorRouter from "./doctorRoute.js";
import patientRouter from "./patientRoute.js";
const Routes = Router();

Routes.use('/api/v1/auth',AuthRouter);
Routes.use('/api/v1/ai',chatRouter);
Routes.use('/api/v1',doctorRouter);
Routes.use('/api/v1',patientRouter);
export default Routes;