import prisma from '../../lib/prisma.js'


export async function seedPatients() {
  
    await prisma.patient.create({
        data: {
            name: 'Test Patient',
            email: 'seeder@example.com',
            password: 'hashedpassword',
            weight: 70.5,
            date_of_birth: new Date('1990-01-01'),
            profile_pic: null,
          },
    })
  }
