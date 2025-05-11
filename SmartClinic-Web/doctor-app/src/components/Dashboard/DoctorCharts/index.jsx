import React from 'react';
import { Grid2, Paper, Typography } from '@mui/material';
import {
  BarChart,
  PieChart,
  LineChart,
} from '@mui/x-charts';

const patientsData = [
  { month: 'Jan', patients: 24 },
  { month: 'Feb', patients: 18 },
  { month: 'Mar', patients: 32 },
  { month: 'Apr', patients: 22 },
];

const genderData = [
  { label: 'Male', value: 60 },
  { label: 'Female', value: 40 },
];

const ageData = [
  { ageRange:10 , count: 12 },
  { ageRange:20 , count: 22 },
  { ageRange:30 , count: 18 },
  { ageRange: 50, count: 8 },
];

const DoctorDashboardCharts = () => {
  return (
    <Grid2 container spacing={3} mt={1} p={0}>
      
      {/* Patients Bar Chart */}
      <Grid2   size={{ xs: 12, sm: 6 , sx:{flexGrow: 1, minWidth: 200 }}}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Patients Analysis
          </Typography>
          <BarChart
            xAxis={[{ scaleType: 'band', data: patientsData.map((d) => d.month) }]}
            series={[{ data: patientsData.map((d) => d.patients), label: 'Patients' }]}
            height={250}
          />
        </Paper>
      </Grid2>

      {/* Gender Pie Chart */}
      <Grid2  size={{ xs: 12, sm: 6 , sx:{flexGrow: 1, minWidth: 200 }}}>
        <Paper elevation={3} sx={{ p: 2 , height: 350 }}>
          <Typography variant="h6" gutterBottom>
            Gender Analysis
          </Typography>
          <PieChart
            series={[{ data: genderData, innerRadius: 30 }]}
            height={250}
          />
        </Paper>
      </Grid2>

      {/* Age Line Chart */}
      <Grid2  size={{ xs: 12, sm: 6 , sx:{flexGrow: 1, minWidth: 200 }}}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Age Analysis
          </Typography>
          <LineChart
            xAxis={[{ data: ageData.map((d) => d.ageRange), label: 'Age Range' }]}
            series={[{ data: ageData.map((d) => d.count), label: 'Count' }]}
            height={250}
          />
        </Paper>
      </Grid2>

    </Grid2>
  );
};

export default DoctorDashboardCharts;
