import prisma from '../../lib/prisma.js';
import { doctorFactory } from '../factories/doctorFactory.js';
export async function seedDoctors(count = 10) {
  for (let i = 0; i < count; i++) {
    const doctorData = doctorFactory();
    await prisma.doctor.create({ data: doctorData });
  }
}
