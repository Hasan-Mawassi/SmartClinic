import {  useEffect } from 'react';

import { request } from '../../utils/request.js';


export const useAiReport = (patientId) => {

 

  useEffect(() => {
    const fetchAiReport = async () => {
      try {
        const response = await request({
          method: 'POST',
          route: `/doctor/ai/generatereport`,
          body:{patientId},
          auth: true,
        });

        if (!response.error) {
         return response.data
        } else {
          console.error('Error fetching AI Report:', response.message);
          return 'error in ai response'
        }
      } catch (err) {
        console.error('Unexpected error fetching AI Report:', err);
      } finally {
        console.log("finish AI Report")
      }
    };

    if (patientId) {
      fetchAiReport();
    }
  }, [patientId]);

  
};
