import { useState, useEffect } from 'react';
import { request } from '../../utils/request.js';
import { useDispatch } from 'react-redux';
import { setKpisData } from '../../redux/Slices/kpiSlice.js';
export const useKpiData = (doctorId) => {
 const dispatch = useDispatch();
  const [kpiLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKpiData = async () => {
      try {
        const response = await request({
          method: "GET",
          route: `/doctor/getkpi/${doctorId}`,
          auth: true,
        });

        if (!response.error) {
          dispatch(setKpisData(response.data));
        } else {
          console.error("Error fetching KPI data:", response.message);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      fetchKpiData();
    }
  }, [doctorId, dispatch]);

  return { kpiLoading };
};
