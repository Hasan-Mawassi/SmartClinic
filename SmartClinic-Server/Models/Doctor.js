import prisma from "../lib/prisma.js";

export class Doctor {

    static async findAll() {
        return await prisma.doctor.findMany();
      }

      static async allWithSchedules() {
        return await prisma.doctor.findMany({
            select: {
              id: true,
              name: true,
              email: true,
              yearsExperience: true,
              profilePicture: true,
              schedules: {
                select: {
                  id: true,
                  startTime: true,
                  endTime: true,
                  slotDuration: true,
                  offdays: true,
                },
              },
            },
          });
      }
} 