import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setAppointments } from '../../redux/Slices/appointmentSlice.js';

export const useAppointmentsData = (doctorId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await request({
          method: 'GET',
          route: `/doctor/appointments?id=${doctorId}`, 
          body:{doctorId},
          auth: true,
        });

        if (!response.error && response.success) {
          dispatch(setAppointments(response.data));
        } else {
          console.error("Error fetching appointments:", response.message);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      fetchAppointments();
    }
  }, [doctorId, dispatch]);

  return { loading };
};
