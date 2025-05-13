import prisma from '../../lib/prisma.js';

export const getDoctorAppointments = async (doctorId) => {
    try {
      const appointments = await prisma.appointment.findMany({
        where: { doctorId },
        include: { patient: true },
        orderBy: { dateTime: 'asc' },
      });
  
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