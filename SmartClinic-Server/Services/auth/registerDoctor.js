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
          const doctor =Doctor.CreateDoctor(
           {
              name,
              email,
              password: hashedPassword,
              yearsExperience,
              profilePicture,
            }
          )
      
          // Generate token
          const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
            expiresIn: '1h',
          })
      
          return {
            token,
            doctor: { id: doctor.id, name: doctor.name, email: doctor.email },
          }
        
}