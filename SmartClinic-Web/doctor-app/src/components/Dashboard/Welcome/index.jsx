import { Box, Typography } from '@mui/material';
import React from 'react';
import DoctorsSvg from '../../../assets/doctors.svg'; // Adjust the path as needed
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const WelcomeSection = ({name="", patients=0}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
    display="flex"
    flexDirection={{ xs: 'column-reverse', sm: 'row' }}
    alignItems="center"
    justifyContent="space-between"
    px={{ xs: 2, sm: 3 }}
    py={1}
    sx={{ borderRadius: 3 }}
  >
    {/* Text section */}
    <Box
      flex={1}
      display="flex"
      justifyContent={{ xs: 'center', sm: 'flex-start' }}
      flexDirection="column"
      textAlign={{ xs: 'center', sm: 'left' }}
      mt={{ xs: 2, sm: 0 }}
    >
      <Typography variant="h5" fontWeight="bold" color="var(--primary)">
        Welcome, {name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        You have {patients} patients
      </Typography>
    </Box>

    {/* Image section */}
    <Box flex={1} display="flex" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
      <img
        src={DoctorsSvg}
        alt="Doctors"
        style={{ width: '100%', maxWidth: isSmallScreen ? '180px' : '150px' }}
      />
    </Box>
  </Box>
);
};

export default WelcomeSection;
