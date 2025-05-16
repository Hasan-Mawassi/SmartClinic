import { loginDoctorService } from "../Services/auth/loginDoctor.js";
import { loginPatientService } from "../Services/auth/loginPatient.js";
import { registerDoctor } from "../Services/auth/registerDoctor.js";
import { registerPatient } from "../Services/auth/registerPatient.js";
import { successResponse } from "../Traits/response.js";


export const register =async (req, res) => {
   
  try {
    const result = await registerPatient(req.body)
    successResponse(res, result, 'User registered successfully', 201)
  } catch (error) {
    console.error('Register error:', error.message)
    res.status(error.status || 500).json({ error: error.message || 'Internal server error' })
  }
}
export const LoginPatient =async (req, res) => {
   
  try {
  const   {email, password} = req.body
    const result = await loginPatientService(email, password)
    successResponse(res, result, 'User registered successfully', 201)
  } catch (error) {
    console.error('Register error:', error.message)
    res.status(error.status || 500).json({ error: error.message || 'Internal server error' })
  }
}
export const doctorRegister =async (req, res) => {
  try {
    const result = await registerDoctor(req.body);
    successResponse(res, result, 'Doctor registered successfully', 201)
  } catch (error) {
    console.error('Register error:', error.message)
    res.status(error.status || 500).json({ error: error.message || 'Internal server error' })
  }

   }

  export const loginDoctor = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await loginDoctorService( email, password );
      successResponse(res, result, 'Login successful', 200);
    } catch (error) {
      console.error('Login error:', error);
      res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
    }
  } 