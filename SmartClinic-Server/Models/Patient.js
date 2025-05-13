import prisma from "../lib/prisma.js";

export class Patient {

    static async findPatientById(id){
        return await  prisma.patient.findUnique({
      where: {
        id,
      },
    });
    }
}