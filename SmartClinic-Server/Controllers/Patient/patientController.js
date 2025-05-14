import { Patient } from "../../Models/Patient.js";
import { Perscription } from "../../Models/Perscription.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";
import { Vital } from '../../Models/Vital.js';
import { getPatientReport } from "../../Services/Doctor/patientReport.js";

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
        const {patientId} = req.body
        const patientVitalData = await Vital.latestPatientVital(patientId)
        res.json(patientVitalData)
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