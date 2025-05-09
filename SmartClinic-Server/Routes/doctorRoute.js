import { Router } from "express";
import * as doctorController from "../Controllers/doctorController.js";
const doctorRouter = Router();

doctorRouter.get("/app/getdoctors", doctorController.getAllDoctors);

export default doctorRouter;