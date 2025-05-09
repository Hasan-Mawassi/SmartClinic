import { Doctor } from '../Models/Doctor.js';

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.allWithSchedules();
        res.status(200).json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error.message);
        res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
    }
}