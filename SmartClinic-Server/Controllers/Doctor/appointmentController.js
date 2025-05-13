import { getDoctorAppointments } from "../../Services/Doctor/appointment.js";


export const getAppointments = async (req, res) => {
    try {
      const{ doctorId } = req.body
      const formattedAppointments = await getDoctorAppointments(doctorId);
      res.json(formattedAppointments);
    } catch (err) {
      res.status(500).json({ message: err.message || 'Failed to fetch appointments' });
    }
  };