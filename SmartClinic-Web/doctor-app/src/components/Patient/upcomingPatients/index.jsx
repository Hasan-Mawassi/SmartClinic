import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setPatientId } from '../../../redux/Slices/patientDataSlice.js';


const PatientSelect = ({ appointments }) => {

 const dispatch = useDispatch();
  const [selectedPatientId, setSelectedPatientId] = useState('');

  const handleChange = (event) => {
    const patientId = event.target.value;
    setSelectedPatientId(patientId);
    dispatch(setPatientId(patientId));
  };

   return (
    <FormControl sx={{width:'200px'}} >
      <InputLabel id="patient-select-label">Upcoming Patients</InputLabel>
      <Select
        labelId="patient-select-label"
        id="patient-select"
          value={selectedPatientId}
        label="Upcoming Patients"
        onChange={handleChange}
      >
       
            {appointments.map((appointment) => (
          <MenuItem 
            key={appointment.patient.id} 
            value={appointment.patient.id}
          >
            {appointment.patient.name}
          </MenuItem>
        ))}
   
      </Select>
    </FormControl>
  );
};

export default PatientSelect;