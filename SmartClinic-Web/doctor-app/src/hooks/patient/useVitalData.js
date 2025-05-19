import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setVotalData } from '../../redux/Slices/patientDataSlice.js';

export const usePatientVitalData = (patientId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVitalData = async () => {
      try {
        const response = await request({
          method: 'GET',
          route: `/patient/getvital?id=${patientId}`, 
          auth: true,
        });

        if (!response.error) {
          dispatch(setVotalData(response.data));
        } else {
          console.error('Error fetching vital data:', response.message);
        }
      } catch (err) {
        console.error('Unexpected error fetching vital data:', err);
      } finally {
        console.log("Finished fetching vital data");
      }
    };

    if (patientId) {
      fetchVitalData();
    }
  }, [patientId, dispatch]);
};
