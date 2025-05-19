import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '../../utils/request.js';
import { setGraphData } from '../../redux/Slices/graphsDataSlice.js';

export const useGraphData = (doctorId) => {
  const dispatch = useDispatch();
  const [graphloading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await request({
          method: 'GET',
          route: `/doctor/graphsdata`,
          body:{id:doctorId},
          auth: true,
        });

        if (!response.error) {
          dispatch(setGraphData({
            patientsData: response.data.data,
            genderData: response.data.genderData,
            ageData: response.data.ageAnalysis,
          }));
        } else {
          console.error('Error fetching graph data:', response.message);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      fetchGraphData();
    }
  }, [doctorId, dispatch]);

  return { graphloading };
};
