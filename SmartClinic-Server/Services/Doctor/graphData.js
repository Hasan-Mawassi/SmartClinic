import { startOfMonth, endOfMonth } from 'date-fns';
import prisma from '../../lib/prisma.js';
import { months } from '../../utils/months.js';

export const getMonthlyPatientsData = async (doctorId) => {
  const currentYear = new Date().getFullYear();
  const monthlyData = [];

  for (const { label, number } of months) {
    const start = startOfMonth(new Date(currentYear, number));
    const end = endOfMonth(new Date(currentYear, number));

    const count = await prisma.appointment.count({
      where: {
        doctorId,
        dateTime: {
          gte: start,
          lte: end,
        },
      },
    });

    monthlyData.push({
      month: label,
      patients: count,
    });
  }

  return monthlyData;
};
export const getGenderStats = async () => {
    
    const femaleCount = await prisma.patient.count({ where: { gender: 0 } });
    const maleCount = await  prisma.patient.count({ where: { gender: 1 } });
    
    return {
      female: femaleCount,
      male: maleCount,
    };
  };