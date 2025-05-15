import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const DoctorVitalsCard = ({data}) => {
  // const healthPercentage = 70;

  return (
    <Card sx={{ borderRadius: 3, p: 2 , flexGrow: 1, border: '1px solid #a0a0a0', boxShadow: 0}}>
      <Grid container spacing={2} alignItems="center">
        {/* Half Circle Pie Chart with Percentage in Center */}
        <Grid item xs={12} sm={6} position="relative">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: data?.healthPercentage , color: '#4caf50' },
                  { id: 1, value: 100 -  data?.healthPercentage, color: '#e0e0e0' },
                ],
                innerRadius: 50,
                outerRadius: 80,
                startAngle: -90,
                endAngle: 90,
                cx: 100,
              },
            ]}
            height={180}
          />
          <Box
            position="absolute"
            top="50%"
            left="25%"
            transform="translate(-50%, -50%)"
            textAlign="center"
          >
            <Typography variant="h6" fontWeight="bold">
              { data?.healthPercentage}%
            </Typography>
            <Typography variant="caption">Overall Health</Typography>
          </Box>
        </Grid>

        {/* Vitals Info */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2">
              <strong>Heart Rate:</strong> {data?.heartRate} bpm
            </Typography>
            <Typography variant="body2">
              <strong>Blood Pressure:</strong> {data?.bloodPressure} mmHg
            </Typography>
            <Typography variant="body2">
              <strong>Temperature:</strong> {data?.temperature}°F
            </Typography>
            <Typography variant="body2">
              <strong>Blood Glucose</strong> {data?.bloodGlucose}%
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DoctorVitalsCard;
