import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { BarChart, PieChart, LineChart } from "@mui/x-charts";

const DoctorDashboardCharts = ({ patientsData, genderData, ageData }) => {
  return (
    <Box
      spacing={3}
      mt={1}
      p={0}
      display={"flex"}
      gap={3}
      flexWrap={"wrap"}
      flexGrow={1}
    >
      {/* Patients Bar Chart */}
      <Box sx={{ xs: 12, sm: 6, md: 3, flexGrow: 1, width: 320 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Patients Analysis
          </Typography>
          <BarChart
            xAxis={[
              { scaleType: "band", data: patientsData.map((d) => d.month) },
            ]}
            series={[
              { data: patientsData.map((d) => d.patients), label: "Patients" },
            ]}
            height={250}
          />
        </Paper>
      </Box>

      {/* Gender Pie Chart */}
      <Box sx={{ xs: 12, sm: 6, md: 3, flexGrow: 1, width: 320 }}>
        <Paper elevation={3} sx={{ p: 2, height: 350 }}>
          <Typography variant="h6" gutterBottom>
            Gender Analysis
          </Typography>
          <PieChart
            series={[{ data: genderData, innerRadius: 30 }]}
            height={250}
          />
        </Paper>
      </Box>

      {/* Age Line Chart */}
      <Box sx={{ xs: 12, sm: 6, md: 3, flexGrow: 1, width: 320 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Age Analysis
          </Typography>
          <LineChart
            xAxis={[
              { data: ageData.map((d) => d.ageRange), label: "Age Range" },
            ]}
            series={[{ data: ageData.map((d) => d.count), label: "Count" }]}
            height={250}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default DoctorDashboardCharts;
