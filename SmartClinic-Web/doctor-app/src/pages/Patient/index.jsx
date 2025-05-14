import React, { useState } from 'react';
import PatientCard from '../../components/Patient/PatientCard'
import TextCard from '../../components/Patient/TextCard';
import MedicineCard from '../../components/Patient/PrevMedicineCard';
import NewMedicineCard from '../../components/Patient/NewMedicineCard';
import { Grid, Box } from '@mui/material';
import DoctorVitalsCard from '../../components/Patient/VitalCard';
import CustomButton from '../../components/Basic/Button';
import MedicineModal from '../../components/Patient/MedicineModal';
import { usePatientInfo } from '../../hooks/patient/usePatientInfo';
import { useSelector } from 'react-redux';
const Patient = () => {
  const patientId = useSelector((state)=> state.patientData.patientId);
  console.log(patientId)
   const{patientLoading}= usePatientInfo(patientId)
  
    const patient = useSelector((state)=> state.patientData.patientInfo );
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            < CustomButton label="Add Medicine" onClick={() => setOpen(true)} variant="contained" color="primary" sx={{ mb: 2,width: '200px',fontSize: '18px' }} />
            <MedicineModal open={open} onClose={() => setOpen(false)} />
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <PatientCard patient={patient} loading={patientLoading} />
              <Box display="flex" flexDirection="row" gap={2} flexWrap={"wrap"}> 
              <MedicineCard
                availableDates={['2025-05-09', '2025-05-10']}
                medicinesByDate={{
                  '2025-05-09': ['Paracetamol', 'Ibuprofen'],
                  '2025-05-10': ['Amoxicillin', 'Vitamin D', 'Aspirin'],
                }}
              />
              <NewMedicineCard
                medicines={['Metformin 500mg', 'Atorvastatin 20mg', 'Lisinopril 10mg', 'Lisinopril 10mg', 'Lisinopril 10mg']}
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