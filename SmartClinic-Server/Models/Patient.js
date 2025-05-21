import prisma from "../lib/prisma.js";

export class Patient {

    static async findPatientById(id){
        return await  prisma.patient.findUnique({
      where: {
        id,
      },
    });
    }
    
      static async findPatienByEmail(email) {
        return prisma.patient.findUnique({
          where: {
            email,
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

    static async getPatientGender(doctorId){
      return await prisma.patient.findMany({
          where: {
            appointments: {
              some: {
                doctorId: doctorId
              }
            }
          },
          select: {
            gender: true
          }
        });
    }
}