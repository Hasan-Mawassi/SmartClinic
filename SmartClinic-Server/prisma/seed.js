import { seedPatients } from "./seeders/patientSeeder.js"

try {
    console.log('Seeding started...')
  
    await seedPatients(10)
  
    console.log('✅ Seeding finished.')
    process.exit(0)
  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  }