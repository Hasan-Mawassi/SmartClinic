import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setAiReport } from '../../redux/Slices/patientDataSlice.js';


export const useAiReport = (patientId) => {
  const dispatch = useDispatch();
 

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
             dispatch(setAiReport(response.data));
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
  }, [patientId, dispatch]);

  
};
