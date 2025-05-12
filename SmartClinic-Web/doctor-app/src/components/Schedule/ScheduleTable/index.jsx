import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography, Box ,Chip} from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'day', headerName: 'Day', width: 130 },
  { field: 'startTime', headerName: 'Start Time', width: 130 },
  { field: 'endTime', headerName: 'End Time', width: 130 },
  { field: 'slotDuration', headerName: 'Slot Duration', width: 150 },
  {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => {
        const status = params.value;
        const color =
          status === 'Previous'
            ? 'error'
            : status === 'Present'
            ? 'success'
            : 'default';
  
        return (
          <Chip
            label={status}
            variant="outlined"
            color={color}
            sx={{ borderRadius: '6px', fontWeight: 500 }}
          />
        );
      },
    },
];

const rows = [
  {
    id: 1,
    date: '2025-05-12',
    day: 'Monday',
    startTime: '09:00 AM',
    endTime: '01:00 PM',
    slotDuration: '30 mins',
    status: 'Present',
  },
  {
    id: 2,
    date: '2025-05-13',
    day: 'Tuesday',
    startTime: '10:00 AM',
    endTime: '02:00 PM',
    slotDuration: '20 mins',
    status: 'Present',
  },
  {
    id: 3,
    date: '2025-05-14',
    day: 'Wednesday',
    startTime: '08:30 AM',
    endTime: '12:30 PM',
    slotDuration: '15 mins',
    status: 'Previous',
  },
];

export default function ScheduleDataGrid() {
  return (
    <Box sx={{ height: 400, width: '90%',mx: 'auto', mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Weekly Schedule
      </Typography>
      <Paper elevation={3} sx={{ p: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
