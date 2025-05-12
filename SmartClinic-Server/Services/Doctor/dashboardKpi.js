import prisma from '../../lib/prisma.js';
import { startOfDay, endOfDay } from 'date-fns';
import { Appointment } from '../../Models/Appointment.js';

export const getDoctorKPIsService = async (doctorId) => {
    const totalPatients = await Appointment.totalPatients(doctorId)
  
    const upcomingAppointments = await Appointment.upcoming(doctorId)
    const todayStart = startOfDay(new Date());
    const todayEnd = endOfDay(new Date());
    const completedToday = await Appointment.completed(todayStart,todayEnd ,doctorId)
  
    return {
      totalPatients,
      upcomingAppointments,
      completedToday,
    };
  };