import { Patient } from "../../Models/Patient.js";


export async function getPatientReport(patientId) {
  const report = await Patient.getPatientReport(patientId);

  if (!report) throw new Error("Patient not found");

  return {
  name: report.name || 'Unknown Patient',

  allergies: Array.isArray(report?.Allergy) && report.Allergy.length > 0
    ? report.Allergy.map(a => a.name)
    : ['None'],

  chronicDiseases: Array.isArray(report?.diseases) && report.diseases.length > 0
    ? report.diseases.map(d => d.name)
    : ['None'],

  recentVital: Array.isArray(report?.vitals) && report.vitals.length > 0
    ? report.vitals.map(t => ({
        date: t.createdAt,
        heartRate: t.heartRate,
        bloodPressure: t.bloodPressure
      }))
    : [],

  recentMedications: Array.isArray(report?.prescriptions) && report.prescriptions.length > 0
    ? report.prescriptions.map(m => ({
        name: m.medicineName,
        dosage: m.quantity,
        startDate: m.createdAt
      }))
    : []
};
}
