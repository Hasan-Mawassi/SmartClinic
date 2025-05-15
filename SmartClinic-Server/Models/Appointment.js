import prisma from "../lib/prisma.js";

export class Appointment {
  static async findUnique(id) {
    return await prisma.appointment.findUnique({
      where: { id: id },
    });
  }

  static async upcoming(doctorId) {
    return await prisma.appointment.count({
      where: {
        doctorId,
        dateTime: {
          gt: new Date(),
        },
        status: "pending",
      },
    });
  }

  static async upcomingToDay(startOfToday, endOfToday, doctorId) {
    return await prisma.appointment.findMany({
      where: {
        doctorId,
        dateTime: {
          gte: startOfToday,
          lte: endOfToday,
        },
        status: "pending",
      },
      orderBy: {
        dateTime: "asc",
      },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  static async completed(startOfDay, endOfDay, doctorId) {
    return await prisma.appointment.count({
      where: {
        doctorId,
        status: "completed",
        dateTime: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });
  }
  static async totalPatients(doctorId) {
    return await prisma.appointment.findMany({
      where: {
        doctorId,
      },
      distinct: ["patientId"],
      select: {
        patientId: true,
      },
    });
  }

  static async patientAppointmentsById(patientId) {
    return await prisma.appointment.findMany({
      where: {
        patientId: patientId,
        status: "pending",
      },
      select: {
        id: true,
        dateTime: true,
        doctor: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        dateTime: "desc",
      },
    });
  }
  static async deleteAppointmentById(id) {
    return await prisma.appointment.delete({
      where: { id: id },
    });
  }
}
