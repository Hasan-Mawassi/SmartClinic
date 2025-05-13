import { Patient } from "../../Models/Patient.js";
import { Perscription } from "../../Models/Perscription.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";


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
        const { id } = req.body;
        const prescritions = await Perscription.getPrescriptions(id)
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