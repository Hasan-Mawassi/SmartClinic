import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setPatientPastMedicines } from '../../redux/Slices/patientDataSlice.js'; // adjust path

export const usePatientPastMedicines = (patientId) => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchPastMedicines = async () => {
      try {
        const response = await request({
          method: 'POST',
          route: `patient/getperscription`,
          body: { id: patientId },
          auth: true,
        });

        if (!response.error) {
          dispatch(setPatientPastMedicines(response.data));
        } else {
          console.error('Error fetching past medicines:', response.message);
        }
      } catch (err) {
        console.error('Unexpected error fetching past medicines:', err);
      } finally {
        console.log("finish past medicine")
      }
    };

    if (patientId) {
      fetchPastMedicines();
    }
  }, [patientId, dispatch]);

  
};
