import { useState, useEffect } from 'react';
import { request } from '../../utils/request.js';
import { setPatientInfo } from '../../redux/Slices/patientDataSlice.js';
import { useDispatch } from 'react-redux';

export const usePatientInfo = (patientId) => {

const dispatch = useDispatch();
  const [patientLoading, setPatientLoading] = useState(true);

  useEffect(() => {
    const fetchPatientInfo = async () => {
      try {
        const response = await request({
          method: 'POST',
          route: `/patient/getinfo`,
          body:{id:patientId},
          auth: true,
        });

        if (!response.error) {
        dispatch(setPatientInfo(response.data));
        } else {
          console.error('Error fetching patient info:', response.message);
        }
       
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setPatientLoading(false);
      }
    };

    if (patientId) {
      fetchPatientInfo();
    }
  }, [patientId,dispatch]);

  return { patientLoading };
}