import { Appointment } from '../../Models/Appointment.js';

export const getDoctorAppointments = async (doctorId) => {
    try {
      const appointments = await  Appointment.getDoctorAppointmentsWithPatient(doctorId)
  
      return appointments.map(appt => {
        const dateObj = new Date(appt.dateTime);
        const formattedDate = dateObj.toISOString().split('T')[0];
        const formattedTime = dateObj.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
  
        return {
          id: appt.id,
          patient: appt.patient?.name || 'Unknown',
          date: formattedDate,
          time: formattedTime,
          status: appt.status.charAt(0).toUpperCase() + appt.status.slice(1),
        };
      });
  
    } catch (err) {
      console.error('Error in getFormattedDoctorAppointments:', err);
      throw new Error('Failed to fetch appointments');
    }
  };

  export const getTodayPatientService = async (doctorId) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  return await Appointment.upcomingToDay(startOfToday, endOfToday,doctorId)
};