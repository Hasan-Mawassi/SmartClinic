import React from 'react';
import { Box, TextField, Button, Avatar, Card } from '@mui/material';
import CustomButton from '../../Basic/Button';

const ProfilePhotoCard = () => {
  return (
    <Card elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 3,border: '1px solid #a0a0a0', boxShadow:0 }}>
      
      {/* Profile Image */}
      <Avatar
        src="" 
        alt="Profile Photo"
        sx={{
          width: 100,
          height: 100,
          borderRadius: 2, 
          border: '2px solid #ccc'
        }}
      />

      
      <TextField
       
        variant="outlined"
        type='file'
        fullWidth
      />

      {/* Update Button */}
      <CustomButton variant="contained" color="primary" label={'Update'} sx={{ width: '20%', fontSize:'18px' }}>
        Update
      </CustomButton>
    </Card>
  );
};

export default ProfilePhotoCard;
