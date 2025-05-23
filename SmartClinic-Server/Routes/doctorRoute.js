import { Router } from "express";
import * as doctorController from "../Controllers/doctorController.js";
import * as reportGeneratorAi from "../Controllers/reportGenerateContoller.js";
import * as dashboardController from "../Controllers/Doctor/dashboardController.js";
import * as appointmentController from "../Controllers/Doctor/appointmentController.js";
import * as patientController from "../Controllers/Patient/patientController.js"
const doctorRouter = Router();

doctorRouter.get("/app/getdoctors", doctorController.getAllDoctors);
doctorRouter.get("/doctor/getkpi/:id",dashboardController.kpiData );
doctorRouter.get("/doctor/graphsdata",dashboardController.graphsData );
doctorRouter.get("/doctor/appointments",appointmentController.getAppointments );
doctorRouter.get("/doctor/todaypatients",doctorController.TodayPatients );
doctorRouter.post("/doctor/createprescription",patientController.addPatientPrescription );
doctorRouter.post("/doctor/createvital",doctorController.createVital );
doctorRouter.post("/doctor/ai/generatereport",reportGeneratorAi.generatePatientReportAi);

export default doctorRouter;