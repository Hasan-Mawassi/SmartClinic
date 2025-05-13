import { Router } from "express";
import * as doctorController from "../Controllers/doctorController.js";
import * as dashboardController from "../Controllers/Doctor/dashboardController.js";
import * as appointmentController from "../Controllers/Doctor/appointmentController.js";
const doctorRouter = Router();

doctorRouter.get("/app/getdoctors", doctorController.getAllDoctors);
doctorRouter.get("/doctor/getkpi/:id",dashboardController.kpiData );
doctorRouter.get("/doctor/graphsdata",dashboardController.graphsData );
doctorRouter.get("/doctor/appointments",appointmentController.getAppointments );

export default doctorRouter;