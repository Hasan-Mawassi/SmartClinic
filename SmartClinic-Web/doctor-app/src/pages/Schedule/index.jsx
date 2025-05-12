import React from 'react';
import ScheduleCard from '../../components/Schedule/ScheduleCard';
import ScheduleTable from '../../components/Schedule/ScheduleTable';
import { Box } from '@mui/material';
const Schedule = () => {
    return (
        <> 
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',mt: 2 }}>
            <ScheduleCard />
        </Box>
        <Box sx={{p:1 }}>
        < ScheduleTable />
        </Box>
        </>
    );
};

export default Schedule;