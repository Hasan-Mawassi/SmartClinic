import { Router } from "express";
import * as patientController from "../Controllers/Patient/patientController.js"
const patientRouter = Router();

patientRouter.get('/patient/getinfo', patientController.getPatientInfo)
patientRouter.get('/patient/getperscription', patientController.getPatientPrescription)
export default patientRouter;