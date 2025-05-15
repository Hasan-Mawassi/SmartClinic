import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setUpcommingPatients } from '../../redux/Slices/appointmentSlice.js';



export const useUpCommingPatients = (patientId) => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchUpCommingPatients = async () => {
      try {
        const response = await request({
          method: 'GET',
          route: `/doctor/todaypatients?doctorId=${patientId}`,
          auth: true,
        });

        if (!response.error) {
            dispatch(setUpcommingPatients(response.data))
         
        } else {
          console.error('Error fetching AI Report:', response.message);
          return 'error in ai response'
        }
      } catch (err) {
        console.error('Unexpected error fetching AI Report:', err);
      } finally {
        console.log("finish Upcomming patients")
      }
    };

    if (patientId) {
      fetchUpCommingPatients();
    }
  }, [patientId, dispatch]);

  
};
