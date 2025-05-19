import { Vital } from "../../Models/Vital.js";


export const createPatientVital = async (data)=>{

    const {
      patientId,
      doctorId,
      healthPercentage,
      heartRate,
      bloodPressure,
      temperature,
      bloodGlucose,
    } = data;

    return await Vital.createVital({
      patientId,
      doctorId,
      healthPercentage,
      heartRate,
      bloodPressure,
      temperature,
      bloodGlucose,
    })
}