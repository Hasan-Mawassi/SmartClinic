import { Vital } from "../../Models/Vital.js";


export const createPatientVital = async (data)=>{

    const {
      patientId,
      doctorId,
      healthPercent,
      heartRate,
      bloodPressure,
      temperature,
      bloodGlucose,
    } = data;

    return await Vital.createVital({
      patientId,
      doctorId,
      healthPercent,
      heartRate,
      bloodPressure,
      temperature,
      bloodGlucose,
    })
}