import { Patient } from "../../Models/Patient.js";


export async function getPatientReport(patientId) {
  const report = Patient.getPatientReport(patientId);

  if (!report) throw new Error("Patient not found");

  return {
    name: report.name,
    allergies: report?.allergies.map(a => a.name),
    chronicDiseases: report?.diseases.map(d => d.name),
    recentVital: report?.vitals.map(t => ({
      date: t.createdAt,
      heartRate: t.heartRate,
      bloodPressure: t.bloodPressure
    })),
    recentMedications: report?.medications.map(m => ({
      name: m.medicineName,
      dosage: m.quantity,
      startDate: m.createdAt,
    })),
  };
}
