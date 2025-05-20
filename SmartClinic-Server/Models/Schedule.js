import prisma from "../lib/prisma.js";

export class Schedule {

    static async createInitialShedule(id) {
        return await prisma.schedule.create({data:{
            startTime:"8:00",
            endTime:"18:00",
            slotDuration:30,
            doctorId:id,
          }})
    }


}