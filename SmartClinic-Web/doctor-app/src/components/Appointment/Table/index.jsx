import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';

const columns = [
  { field: 'patient', headerName: 'Patient', flex: 1 },
  { field: 'date', headerName: 'Date', flex: 1 },
  { field: 'time', headerName: 'Time', flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params) => {
      const status = params.value;
      const color =
        status === 'Confirmed'
          ? 'success'
          : status === 'Pending'
          ? 'warning'
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

// const rows = [
//   { id: 1, patient: 'John Doe', date: '2025-05-10', time: '10:00 AM', status: 'Confirmed' },
//   { id: 2, patient: 'Jane Smith', date: '2025-05-11', time: '12:00 PM', status: 'Pending' },
// ];

const AppointmentsTable = ({rows}) => {
  return (
    <Box
      sx={{
        height: '80vh',
        mx: 'auto',
        width: '95%',
        boxShadow: 0,
        '& .MuiDataGrid-root': {
          borderRadius: 2,
          boxShadow: 2,
          mt: 3,
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: '#f5f5f5',
          color: 'Black',
          fontWeight: 'bold',
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default AppointmentsTable;
