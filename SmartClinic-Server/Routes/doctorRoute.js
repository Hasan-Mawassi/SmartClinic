import { Router } from "express";
import * as doctorController from "../Controllers/doctorController.js";
import * as dashboardController from "../Controllers/Doctor/dashboardController.js";
const doctorRouter = Router();

doctorRouter.get("/app/getdoctors", doctorController.getAllDoctors);
doctorRouter.get("/doctor/getkpi/:id",dashboardController.kpiData )
export default doctorRouter;