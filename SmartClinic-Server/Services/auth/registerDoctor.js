import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../lib/prisma.js'
import { Doctor } from '../../Models/Doctor.js';

export const registerDoctor = async({
                         name,
                          email, 
                          password,
                          yearsExperience,
                          profilePicture
                        }) => { 

        const saltRounds = 10;
        const JWT_SECRET = process.env.JWT_SECRET;
          const existingUser = await prisma.doctor.findUnique({ where: { email } })
          if (existingUser) {
            throw { status: 409, message: 'Email already in use' }
          }
      
          const hashedPassword = await bcrypt.hash(password, saltRounds)

          // Create user
          const doctor =await Doctor.CreateDoctor(
           {
              name,
              email,
              password: hashedPassword,
              yearsExperience,
              profilePicture,
            }
          )
            const schedule = await prisma.schedule.create({data:{
            startTime:"8:00",
            endTime:"18:00",
            slotDuration:30,
            doctorId:doctor.id,
            offdays:[]
          }})
          // Generate token
          const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
            expiresIn: '1h',
          })
      
          return {
            token,
            doctor: { id: doctor.id, name: doctor.name, email: doctor.email },
          }
        
}