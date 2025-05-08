import prisma from "../lib/prisma.js";

export class Doctor {

    static async findAll() {
        return await prisma.doctor.findMany();
      }

      static async allWithSchedules() {
        return await prisma.doctor.findMany({
          include: {
            schedules: true,
          },
        });
      }
} 