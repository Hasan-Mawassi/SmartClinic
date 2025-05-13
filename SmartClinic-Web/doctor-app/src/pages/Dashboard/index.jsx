// pages/Dashboard.jsx
import React, { useEffect } from 'react';
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
// import { request } from '../../utils/request';
import { useKpiData } from '../../hooks/dashboard/useKpiData.js';

const Dashboard = () => {
  
  const doctor = useSelector((state) => state.doctorInfo)
  const doctorId = doctor.id;
  const doctorName = doctor.name;

 const { loading } = useKpiData(doctorId);
const kpiData = useSelector((state) => state.kpisData);
  

  useEffect(() => {
  
   
  }, []);

  if (loading) {
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
        value={kpiData.totalPatients}
        icon={<PeopleIcon fontSize="large" color="primary" />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:3 }}>
      <KpiCard
        title="Upcoming Appointments"
        value={kpiData.upcomingAppointments}
        icon={<EventIcon fontSize="large" color="secondary" />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:3 }}>
      <KpiCard
        title="Pending Reports"
        value={kpiData.pendingReports}
        icon={<ReportIcon fontSize="large" sx={{ color: '#fb8c00' }} />}
      />
    </Box>
    <Box sx={{flexGrow: 1, minWidth: 140 }} size={{ xs: 12, sm: 6,md:4 }}>
      <KpiCard
        title="Completed This Month"
        value={kpiData.completedToday}
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
