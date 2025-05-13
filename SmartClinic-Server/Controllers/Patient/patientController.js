import { Patient } from "../../Models/Patient.js";
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