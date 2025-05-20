import prisma from '../../lib/prisma.js'
import { patientFactory } from '../factories/patientFactory.js'
import { faker } from '@faker-js/faker'
export async function seedPatients(count = 5) {
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

    // Add vitals
    const vitals = Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => {
      const doctor = faker.number.int({ min: 1, max: 3 });
      return prisma.vital.create({
        data: {
          patientId: patient.id,
          doctorId: doctor,
          healthPercentage: faker.number.float({ min: 50, max: 100, precision: 0.01 }),
          heartRate: faker.number.int({ min: 60, max: 100 }),
          bloodPressure: `${faker.number.int({ min: 90, max: 140 })}/${faker.number.int({ min: 60, max: 90 })}`,
          temperature: faker.number.float({ min: 36.0, max: 39.0, precision: 0.1 }),
          bloodGlucose: faker.number.float({ min: 70, max: 180, precision: 0.1 }),
        },
      });
    });

    await Promise.all([...allergies, ...diseases, ...vitals]);
  }
}