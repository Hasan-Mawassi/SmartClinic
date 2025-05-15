import { Appointment } from "../../Models/Appointment.js"


export const getPatientAppointmentService = async (patientId)=>{

    const appointments = await Appointment.patientAppointmentsById(patientId);
    return appointments;

}

export const deleteAppointmentService = async (appointmentId) =>{

  const appointment = await Appointment.findUnique(appointmentId)
  if (!appointment) {
    throw new Error('NotFound');
  }
  await Appointment.deleteAppointmentById(appointmentId)

  return { success: true };
}