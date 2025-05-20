import prisma from '../../lib/prisma.js';
import { Schedule } from '../../Models/Schedule.js';
import { doctorFactory } from '../factories/doctorFactory.js';
export async function seedDoctors(count = 10) {
  for (let i = 0; i < count; i++) {
    const doctorData = doctorFactory();
   const doctor =  await prisma.doctor.create({ data: doctorData });
    await Schedule.createInitialShedule(doctor.id)
  }
}
