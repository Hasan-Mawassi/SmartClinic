import { Appointment } from "../../Models/Appointment"


export const getPatientAppointment = async (patientId)=>{

    const appointments = await Appointment.patientAppointmentsById(patientId);
    return appointments;

}