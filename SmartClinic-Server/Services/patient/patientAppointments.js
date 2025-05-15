import { Appointment } from "../../Models/Appointment.js"


export const getPatientAppointmentService = async (patientId)=>{

    const appointments = await Appointment.patientAppointmentsById(patientId);
    return appointments;

}