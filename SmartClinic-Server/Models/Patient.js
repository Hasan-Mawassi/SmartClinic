import prisma from "../lib/prisma.js";

export class Patient {

    static async findPatientById(id){
        return await  prisma.patient.findUnique({
      where: {
        id,
      },
    });
    }

    static async getPatientReport (patientId){
        return await prisma.patient.findUnique({
    where: { id: patientId },
    include: {
      Allergy: true,
      diseases: true,
      vitals: {
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      prescriptions: {
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    }, 
    })
    }
}