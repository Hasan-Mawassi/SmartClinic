import { startOfMonth, endOfMonth } from 'date-fns';
import prisma from '../../lib/prisma.js';
import { months } from '../../utils/months.js';
import { Appointment } from '../../Models/Appointment.js';
import { Patient } from '../../Models/Patient.js';

export const getMonthlyPatientsData = async (doctorId) => {
  const currentYear = new Date().getFullYear();
  const monthlyData = [];

  for (const { label, number } of months) {
    const start = startOfMonth(new Date(currentYear, number));
    const end = endOfMonth(new Date(currentYear, number));

    const count = await Appointment.countDoctorAppointment(doctorId, start , end)

    monthlyData.push({
      month: label,
      patients: count,
    });
  }

  return monthlyData;
};
export const getGenderStats = async (doctorId) => {
 const patients = await Patient.getPatientGender(doctorId)

  const femaleCount = patients.filter(p => p.gender === 0).length;
  const maleCount = patients.filter(p => p.gender === 1).length;

    return [
      {label: 'female', value: femaleCount},
      {label: 'male', value: maleCount}
    
    ]
      
  };

 export const getPatientAgeAnalysis = async (doctorId) =>{
    // Fetch all appointments for the doctor with patient info
    const appointments = await prisma.appointment.findMany({
      where: { doctorId },
      include: {
        patient: true,
      },
    });
  
    // Extract unique patients using a Map
    const uniquePatients = new Map();
  
    for (const appt of appointments) {
      const patient = appt.patient;
      
      if (!uniquePatients.has(patient.id)) {
        uniquePatients.set(patient.id, patient);
      }
    }
  
    //  Analyze age distribution
    const now = new Date();
    const ageGroups = {};
  
    for (const patient of uniquePatients.values()) {
      const birthDate = new Date(patient.date_of_birth);
      const age = now.getFullYear() - birthDate.getFullYear();
        
      // 5-year range
      const ageRange = Math.round(age / 5) * 5
      ageGroups[ageRange] = (ageGroups[ageRange] || 0) + 1;
    }
  
    //  Format output
    const ageData = Object.entries(ageGroups).map(([ageRange, count]) => ({
      ageRange: parseInt(ageRange),
      count,
    }));
  
    return ageData;
  }