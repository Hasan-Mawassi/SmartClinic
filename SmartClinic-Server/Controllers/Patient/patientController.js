import { Patient } from "../../Models/Patient.js";
import { Perscription } from "../../Models/Perscription.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";
import { Vital } from '../../Models/Vital.js';
import { getPatientReport } from "../../Services/Doctor/patientReport.js";
import { deleteAppointmentService, getPatientAppointmentService } from "../../Services/patient/patientAppointments.js";

export const  getPatientInfo =  async (req , res)=>{
   try {
    const { id } = req.body;
    const patient = await Patient.findPatientById(id); 
     successResponse(res, patient, 'Patient info', 200);
  } catch (error) {
    console.error('Error getting patient info:', error);
    errorResponse(res,error,500)
  }
}

export const getPatientPrescription =async (req , res)=>{
    try {
        const  { id } = req.query;
        const prescritions = await Perscription.getPrescriptions(parseInt(id))
       successResponse(res, prescritions, 'prescritions info', 200);
    } catch (error) {
         console.error('Error get prescription:', error);
        errorResponse(res,error,500)
    }
}

export const addPatientPrescription = async (req, res)=>{
    try {
    const prescription =await Perscription.createPrescription(req.body)
    successResponse(res, prescription, 'prescritions info', 200);
    } catch (error) {
     console.error('Error creating prescription:', error);
      errorResponse(res,error,500)
    }
}

export const getPatietnVital = async (req , res)=>{
    try {
        const {id} = req.query
        const patientVitalData = await Vital.latestPatientVital(parseInt(id))
         successResponse(res, patientVitalData, 'patient Vital Data', 200);
    } catch (error) {
        console.log(error)
        errorResponse(res, error, 500)
    }
}

export const generatePatientReport = async (req, res) => {
  const { patientId } = req.body;

  try {
    const report = await getPatientReport(patientId);
    res.status(200).json({ success: true, report });
  } catch (err) {
    console.log(err)
    res.status(404).json({ success: false, message: err.message });
  }
};

export const getPatientAppointments =async ( req, res)=>{
     const { id } = req.query;
    try {
    const appointments = await  getPatientAppointmentService(parseInt(id));
    res.status(200).json({ success: true, appointments });
  } catch (err) {
    console.log(err)
    res.status(404).json({ success: false, message: err.message });
  }
}

export const deleteAppointment = async (req, res) => {
  try {
    const {id} = req.query;
    const deleteAppointment = await deleteAppointmentService(parseInt(id))
     successResponse(res, deleteAppointment, 'appointment deleted successfully!', 200);
  } catch (error) {
   errorResponse(res, error, 500)
  }
};