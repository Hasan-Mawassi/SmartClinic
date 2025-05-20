import prisma from '../../lib/prisma.js';
import { faker } from '@faker-js/faker';

export async function seedAppointmentsAndPrescriptions() {
  const doctors = await prisma.doctor.findMany();
  const patients = await prisma.patient.findMany();

  for (const doctor of doctors) {
    for (let i = 0; i < 3; i++) {
      const patient = faker.helpers.arrayElement(patients);

      const appointment = await prisma.appointment.create({
        data: {
          doctorId: doctor.id,
          patientId: patient.id,
          dateTime: faker.date.soon(),
          status: faker.helpers.arrayElement(['pending', 'confirmed']),
          bookedVia: faker.helpers.arrayElement(['text', 'voice']),
          symptoms: faker.lorem.sentence(),
        },
      });

      await prisma.prescription.create({
        data: {
          doctorId: doctor.id,
          patientId: patient.id,
          medicineName: faker.word.words(2),
          duration: `${faker.number.int({ min: 3, max: 14 })} days`,
          frequency: 'twice daily',
          quantity: '1 tablet',
        },
      });
    }
  }
}
