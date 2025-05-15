import { Router } from "express";
import * as patientController from "../Controllers/Patient/patientController.js"
const patientRouter = Router();

patientRouter.post('/patient/getinfo', patientController.getPatientInfo)
patientRouter.get('/patient/getperscription', patientController.getPatientPrescription)
patientRouter.get('/patient/getvital', patientController.getPatietnVital)
patientRouter.get('/patient/getreport', patientController.generatePatientReport)
patientRouter.get('/patient/getAppointments', patientController.getPatientAppointments)
export default patientRouter;