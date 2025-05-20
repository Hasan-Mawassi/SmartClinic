import React from 'react';
import CustomCard from '../../Basic/authCard';
import { Modal, Box, Typography } from '@mui/material';
import InputField from '../../Basic/inputField';
import CustomButton from '../../Basic/Button';
const SheduleCard = ({ open, onClose }) => {
    return (
       <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="schedule-modal"
      aria-describedby="schedule-form"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        borderRadius: 2,
        outline: 'none'
      }}>
        {/* Modal Header */}
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
          Schedule Settings
        </Typography>

        {/* Form Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <InputField inputLabel='Start Time' placeholder="Enter Start Time" type="text" fullWidth />
          <InputField inputLabel='End Time' placeholder="Enter End Time" type="text" fullWidth />
          <InputField inputLabel='Slot Duration' placeholder="Enter Slot Duration in Min" type="text" fullWidth />
          <InputField inputLabel='Off Day' placeholder="Enter Off Day" type="text" fullWidth />
          
          <CustomButton 
            label={'Save'} 
            sx={{ alignSelf: "center", fontSize: '18px', mt: 2 }}
            onClick={onClose} // Or handle form submission first
          />
        </Box>
      </Box>
    </Modal>
    );
};

export default SheduleCard;