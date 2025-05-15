import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PatientSelect = () => {


   return (
    <FormControl fullWidth>
      <InputLabel id="patient-select-label">Upcoming Patients</InputLabel>
      <Select
        labelId="patient-select-label"
        id="patient-select"
        // value={}
        label="Upcoming Patients"
        // onChange={}
      >
       
          <MenuItem 
            key='2'
            value='patient'
          >
            patient
          </MenuItem>
   
      </Select>
    </FormControl>
  );
};

export default PatientSelect;