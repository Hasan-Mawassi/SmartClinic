import { registerPatient } from "../Services/auth/registerPatient.js";



export const register =async (req, res) => {
   
  try {
    const result = await registerPatient(req.body)
    res.status(201).json(result)
  } catch (error) {
    console.error('Register error:', error.message)
    res.status(error.status || 500).json({ error: error.message || 'Internal server error' })
  }
}

