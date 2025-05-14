import prisma from "../lib/prisma.js";

export class Vital {
    
  async createVital({
    patientId,
    doctorId,
    healthPercent,
    heartRate,
    bloodPressure,
    temperature,
    bloodGlucose,
  }) {
    return await prisma.vital.create({
      data: {
        patientId,
        doctorId,
        healthPercent,
        heartRate,
        bloodPressure,
        temperature,
        bloodGlucose,
      },
    });
  }




}
