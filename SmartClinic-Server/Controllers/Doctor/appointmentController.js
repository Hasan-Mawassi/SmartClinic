import { getDoctorAppointments } from "../../Services/Doctor/appointment.js";
import { successResponse ,errorResponse } from "../../Traits/response.js";

export const getAppointments = async (req, res) => {
    try {
      const{ id } = req.query
      const formattedAppointments = await getDoctorAppointments(parseInt(id));
      successResponse(res, formattedAppointments, 'get Appointment successfully', 200);
    } catch (err) {
    errorResponse(res,err,500)
    }
  };