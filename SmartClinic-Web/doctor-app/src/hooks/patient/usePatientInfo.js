import { useState, useEffect } from 'react';
import { request } from '../../utils/request.js';


export const usePatientInfo = (patientId) => {


  const [patientLoading, setPatientLoading] = useState(true);

  useEffect(() => {
    const fetchPatientInfo = async () => {
      try {
        const response = await request({
          method: 'GET',
          route: `/patient/info`,
          body:{id:patientId},
          auth: true,
        });

        if (!response.error) {
         console.log(response)
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
  }, [patientId]);

  return { patientLoading };
}