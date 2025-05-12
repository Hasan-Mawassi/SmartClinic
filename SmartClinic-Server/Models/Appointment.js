import prisma from "../lib/prisma.js";

export class Appointment {

    static async upcoming (doctorId){
        return await prisma.appointment.count({
            where: {
                doctorId,
              dateTime: {
                gt: new Date(), 
              },
              status: 'pending',
            },
          });
    }
    static async completed (startOfDay, endOfDay,doctorId){
        return  await prisma.appointment.count({
            where: {
               doctorId, 
              status: 'completed',
              dateTime: {
                gte: startOfDay,
                lte: endOfDay,
              },
            },
          });
    }
    static async totalPatients (doctorId){
        return  await prisma.appointment.count({
            where: {
              doctorId: doctorId,
            },
            distinct: ['patientId'],
          });
    }
}