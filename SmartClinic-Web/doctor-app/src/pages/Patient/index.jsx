import React from 'react';
import PatientCard from '../../components/Patient/PatientCard'
import TextCard from '../../components/Patient/TextCard';
import MedicineCard from '../../components/Patient/PrevMedicineCard';
import NewMedicineCard from '../../components/Patient/NewMedicineCard';
import { Grid, Box } from '@mui/material';
import DoctorVitalsCard from '../../components/Patient/VitalCard';
const Patient = () => {
    const patient = {
        name: 'John Doe',
        age: 45,
        weight: 72,
        gender: 'Male',
        bloodGroup: 'O+',
        image: '/logo.png',
        surgeryName: 'Appendectomy surgery',
        surgeryDate: '2024-08-15'
      };
      
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <PatientCard patient={patient} />
              <Box display="flex" flexDirection="row" gap={2} flexWrap={"wrap"}> 
              <MedicineCard
                availableDates={['2025-05-09', '2025-05-10']}
                medicinesByDate={{
                  '2025-05-09': ['Paracetamol', 'Ibuprofen'],
                  '2025-05-10': ['Amoxicillin', 'Vitamin D', 'Aspirin'],
                }}
              />
              <NewMedicineCard
                medicines={['Metformin 500mg', 'Atorvastatin 20mg', 'Lisinopril 10mg']}
              />
              < DoctorVitalsCard />
              </Box>
            </Box>
          </Grid>
  
          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextCard
                title="AI Diagnosis Insight"
                description="Patient Ahmed Nasser, a Fifty-year-old male with a known history of Type 2 Diabetes and Hyperlipidemia, presented on April 10, 2025, reporting increased shortness of breath on exertion and occasional dizziness. His vital signs revealed blood pressure of 135/85 mmHg and a fasting glucose level of 155 mg/dL. He is currently managed with Metformin and Atorvastatin. Recent laboratory results showed elevated triglycerides, low HDL cholesterol, and an HbA1c of 8.2%. AI-based risk assessment indicates a mod"
              />
              <TextCard
                title="AI Diagnosis Insight"
                description="Patient Ahmed Nasser, a Fifty-year-old male with a known history of Type 2 Diabetes and Hyperlipidemia, presented on April 10, 2025, reporting increased shortness of breath on exertion and occasional dizziness. His vital signs revealed blood pressure of 135/85 mmHg and a fasting glucose level of 155 mg/dL. He is currently managed with Metformin and Atorvastatin. Recent laboratory results showed elevated triglycerides, low HDL cholesterol, and an HbA1c of 8.2%. AI-based risk assessment indicates a mod"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Patient;