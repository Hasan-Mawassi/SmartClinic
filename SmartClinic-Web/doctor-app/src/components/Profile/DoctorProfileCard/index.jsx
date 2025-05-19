import React from 'react';
import { Box, Card, Typography, Button, Grid,  } from '@mui/material';
import InputField from '../../Basic/inputField'; // Make sure this path is correct
import CustomButton from '../../Basic/Button';

const DoctorProfileCard = () => {
  return (
    <Card elevation={2} sx={{ p: 4, maxWidth: 600, margin: '' ,boxShadow:0 ,border: '1px solid #a0a0a0'}}>
      <Typography variant="h5" mb={3} textAlign={'center'} fontWeight={600}>
        Doctor Profile
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField
            inputLabel="Full Name"
            placeholder="Enter Full Name"
            type="text"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            inputLabel="Email"
            placeholder="Enter Email"
            type="text"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            inputLabel="Specialty"
            placeholder="Enter Specialty"
            type="text"
            variant="outlined"
            fullWidth={true}
            />
        
            </Grid>

            <Grid item xs={12}>
          <InputField
            inputLabel="Experience"
            placeholder="Enter Years of Experience"
            type="text"
            variant="outlined"
            fullWidth={true}
          />

            </Grid>

        <Grid item xs={12} textAlign={'center'}>
          <CustomButton label={'Update'} variant="contained">
            Update Profile
          </CustomButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DoctorProfileCard;
