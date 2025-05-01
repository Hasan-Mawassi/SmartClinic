import prisma from '../../lib/prisma.js'
import { patientFactory } from '../factories/patientFactory.js'

export async function seedPatients(count = 10) {
  
   
        for (let i = 0; i < count; i++) {
          const patientData = patientFactory()
          await prisma.patient.create({ data: patientData })
        }
      
  }
