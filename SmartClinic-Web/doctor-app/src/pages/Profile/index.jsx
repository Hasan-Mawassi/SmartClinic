import React from 'react';
import ProfilePhotoCard from '../../components/Profile/ProfilePhotoCard';
import { Box } from '@mui/material';
import DoctorProfileCard from '../../components/Profile/DoctorProfileCard';

const Profile = () => {
    return (
        <Box sx={{ mt: 2, p:2 }}>
            
            < ProfilePhotoCard />
            <Box sx={{ mt: 2 }}>

            < DoctorProfileCard sx={{mt:2}} />
            </Box>
        </Box>
    );
};

export default Profile;