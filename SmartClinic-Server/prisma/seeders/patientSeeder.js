import prisma from '../../lib/prisma.js'
import { patientFactory } from '../factories/patientFactory.js'

export async function seedPatient(count = 5) {
  for (let i = 0; i < count; i++) {
    const patientData = patientFactory();
    const patient = await prisma.patient.create({ data: patientData });

    // Add allergies
    const allergies = Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
      prisma.allergy.create({
        data: {
          name: faker.lorem.word(),
          patientId: patient.id,
        },
      })
    );

    // Add diseases
    const diseases = Array.from({ length: faker.number.int({ min: 0, max: 2 }) }, () =>
      prisma.chronicDisease.create({
        data: {
          name: faker.lorem.word(),
          patientId: patient.id,
        },
      })
    );

    await Promise.all([...allergies, ...diseases]);
  }
}