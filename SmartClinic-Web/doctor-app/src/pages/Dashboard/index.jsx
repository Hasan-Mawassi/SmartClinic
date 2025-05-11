// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Grid2,Box, CircularProgress } from '@mui/material';
import KpiCard from '../../components/Basic/KPICard';
import WelcomeSection from '../../components/Dashboard/Welcome';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Description';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoctorDashboardCharts from '../../components/Dashboard/DoctorCharts';
import AppointmentTable from '../../components/Dashboard/AppointmentTable';
const Dashboard = () => {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
   
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
    <WelcomeSection />
    <Box p={2}>
      <Grid2 container spacing={3}>
    <Grid2  size={{ xs: 12, sm: 6 ,sx:{flexGrow: 1, minWidth: 200 }}}>
      <KpiCard
        title="Total Patients"
        value={kpis.totalPatients}
        icon={<PeopleIcon fontSize="large" color="primary" />}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 6 ,sx:{flexGrow: 1, minWidth: 200 }}}>
      <KpiCard
        title="Upcoming Appointments"
        value={kpis.upcomingAppointments}
        icon={<EventIcon fontSize="large" color="secondary" />}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 6 ,sx:{flexGrow: 1, minWidth: 200 }}}>
      <KpiCard
        title="Pending Reports"
        value={kpis.pendingReports}
        icon={<ReportIcon fontSize="large" sx={{ color: '#fb8c00' }} />}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, sm: 6 ,sx:{flexGrow: 1, minWidth: 200 }}}>
      <KpiCard
        title="Completed This Month"
        value={kpis.completedConsultations}
        icon={<DoneAllIcon fontSize="large" sx={{ color: '#4caf50' }} />}
      />
    </Grid2>
  </Grid2>
    <DoctorDashboardCharts />
    <AppointmentTable />
    </Box>
    </>
  );
};

export default Dashboard;
