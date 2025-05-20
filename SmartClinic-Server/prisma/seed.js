import { seedPatients } from "./seeders/patientSeeder.js"
import { seedDoctors } from "./seeders/seedDoctors.js";

try {
    console.log('Seeding started...')
    await seedDoctors(10);
    await seedPatients(10)
    await seedAppointmentsAndPrescriptions();
    console.log('✅ Seeding finished.')
    process.exit(0)
  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  }