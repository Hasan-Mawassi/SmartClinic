export  const generatePatientPrompt = (report) =>{
  return `
Patient Report Summary

Name: ${report.name}

Chronic Diseases:
- ${report.chronicDiseases.join("\n- ") || "None"}

Allergies:
- ${report.allergies.join("\n- ") || "None"}

Recent Treatments:
${report.recentVital.map(t => `- (${t.date}) heart rate ${t.heartRate} bood pressure ${t.bloodPressure} `).join("\n")  || "None"}

Recent Medications:
${report.recentMedications.map(m => `- ${m.name} (${m.dosage}) start date ${m.startDate} `).join("\n") || "None"}

Please write a concise and professional summary of this patient’s current medical condition, including any important risks, recommendations, and follow-ups to give an overview for the doctor.
  `;
}