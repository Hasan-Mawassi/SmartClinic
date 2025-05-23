import prisma from "../lib/prisma.js";

export class Vital {

  static async createVital({
    patientId,
    doctorId,
    healthPercentage,
    heartRate,
    bloodPressure,
    temperature,
    bloodGlucose,
  }) {
    return await prisma.vital.create({
      data: {
        patientId,
        doctorId,
        healthPercentage,
        heartRate,
        bloodPressure,
        temperature,
        bloodGlucose,
      },
    });
  }

 static async latestPatientVital (patientId){
    return await prisma.vital.findFirst({
  where: {
    patientId, 
  },
  orderBy: {
    createdAt: 'desc', 
  },
});
 }


}
