import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Doctor } from '../../Models/Doctor.js';

export const loginDoctorService = async ( email, password ) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  // Find doctor by email
  const doctor = await Doctor.findUniqueDoctor(email)

  if (!doctor) {
    throw { status: 401, message: 'Invalid Credentials' };
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, doctor.password);
  if (!isMatch) {
    throw { status: 401, message: 'Invalid Credentials' };
  }


  const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return {
    token,
    doctor: { id: doctor.id, name: doctor.name, email: doctor.email },
  };
};
