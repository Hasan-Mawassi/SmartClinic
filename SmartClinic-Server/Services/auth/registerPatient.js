import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../../lib/prisma.js'

export const registerPatient = async({ name, email, password ,gender}) => { 

        const saltRounds = 10;
        const JWT_SECRET = process.env.JWT_SECRET;
          const existingUser = await prisma.patient.findUnique({ where: { email } })
          if (existingUser) {
            throw { status: 409, message: 'Email already in use' }
          }
      
          const hashedPassword = await bcrypt.hash(password, saltRounds)

          // Create user
          const user = await prisma.patient.create({
            data: {
              name,
              email,
              password: hashedPassword,
              weight: 0,
              date_of_birth: new Date(),
              gender
            },
          })
      
          // Generate token
          const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
          })
      
          return {
            token,
            user: { id: user.id, name: user.name, email: user.email },
          }
        
}