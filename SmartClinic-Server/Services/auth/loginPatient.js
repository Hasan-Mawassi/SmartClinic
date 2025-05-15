import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Patient } from '../../Models/Patient.js';

export const loginPatientService = async ( email, password ) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  // find patient by email
  const patient = await Patient.findPatienByEmail(email)

  if (!patient) {
    throw { status: 401, message: 'Invalid Credentials' };
  }

  // compare password
  const isMatch = await bcrypt.compare(password, patient.password);
  if (!isMatch) {
    throw { status: 401, message: 'Invalid Credentials' };
  }


  const token = jwt.sign({ id: patient.id, email: patient.email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return {
    token,
    patient: { id: patient.id, name: patient.name, email: patient.email },
  };
};
