import { response } from 'express';
import { Doctor } from '../Models/Doctor.js';
import { createPatientVital } from '../Services/Doctor/patientpage.js';
import { successResponse ,errorResponse } from "../Traits/response.js";
import { getTodayPatientService } from '../Services/Doctor/appointment.js';
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.allWithSchedules();
        res.status(200).json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error.message);
        res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
    }
}

export const createVital = async (req , res)=>{
 try {
    const vital = await createPatientVital(req.body)
    successResponse(res,vital , "successfully created",200)
 } catch (error) {
    console.log(error)
   errorResponse(res,error,500)
 }
}

export const TodayPatients = async (req , res)=>{
try {
    const {doctorId} = req.query
    const appointments = await getTodayPatientService(parseInt(doctorId));
     successResponse(res,appointments , "Get upcomming Appointmets succesfully",200)
} catch (error) {
     console.error('Error fetching today patients:', error);
      errorResponse(res,error,500)
}
}
