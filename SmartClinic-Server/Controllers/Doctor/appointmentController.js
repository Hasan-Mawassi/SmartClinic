import { getDoctorAppointments } from "../../Services/Doctor/appointment.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";

export const getAppointments = async (req, res) => {
    try {
      const{ doctorId } = req.body
      const formattedAppointments = await getDoctorAppointments(doctorId);
      successResponse(res, formattedAppointments, 'get Appointment successfully', 200);
    } catch (err) {
    errorResponse(res,err,500)
    }
  };