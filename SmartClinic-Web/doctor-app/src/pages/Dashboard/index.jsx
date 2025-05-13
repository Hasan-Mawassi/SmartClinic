// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import KpiCard from '../../components/Basic/KPICard';
import WelcomeSection from '../../components/Dashboard/Welcome';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Description';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoctorDashboardCharts from '../../components/Dashboard/DoctorCharts';
import AppointmentTable from '../../components/Dashboard/AppointmentTable';
import { useSelector } from 'react-redux'
import { request } from '../../utils/request';
const Dashboard = () => {
  const [kpis, setKpis] = useState(null);
  const doctor = useSelector((state) => state.doctorInfo)
  const doctorId = doctor.id;
  const doctorName = doctor.name;

  const getKpiData = async (doctorId)=>{
    try {
        const response = await request({
          method: "GET",
          route: `/doctor/getkpi/${doctorId}`,
          auth: true, // if the endpoint is protected
        });
    
        if (response.error) {
          console.error("Error fetching KPI data:", response.message);
          return null;
        }
        
        console.log(response.data) ; // adjust based on your actual backend structure
      } catch (err) {
        console.error("Unexpected error:", err);
        return null;
      }
    };
  

  useEffect(() => {
     getKpiData(doctorId)
    setTimeout(() => {
      setKpis({
        totalPatients: 124,
        upcomingAppointments: 8,
        pendingReports: 5,
        completedConsultations: 42
      });
    }, 800);
  }, []);

  if (!kpis) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <> 
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2 }}> 
    <WelcomeSection
    name={doctorName}
    />
    <Box p={2}  spacing={3} display={'flex'} gap={3} flexWrap={'wrap'} >
    <Box  sx={{flexGrow: 1, minWidth: 140 }}  size={{ xs: 12, sm: 6 ,md:3}}>
      <KpiCard
        title="Total Patients"
        value={kpis.totalPatients}
        icon={<PeopleIcon fontSize="large" color="primary" />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:3 }}>
      <KpiCard
        title="Upcoming Appointments"
        value={kpis.upcomingAppointments}
        icon={<EventIcon fontSize="large" color="secondary" />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:3 }}>
      <KpiCard
        title="Pending Reports"
        value={kpis.pendingReports}
        icon={<ReportIcon fontSize="large" sx={{ color: '#fb8c00' }} />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:4 }}>
      <KpiCard
        title="Completed This Month"
        value={kpis.completedConsultations}
        icon={<DoneAllIcon fontSize="large" sx={{ color: '#4caf50' }} />}
      />
    </Box>
  
    </Box>
    <Box p={2}  spacing={3} display={'flex'} gap={3} flexWrap={'wrap'}>

    <DoctorDashboardCharts />
    </Box>
    
    </Box>
    <Box p={2}  spacing={3} display={'flex'} gap={3} flexWrap={'wrap'}>

    <AppointmentTable />
    </Box>
    </>
  );
};

export default Dashboard;
