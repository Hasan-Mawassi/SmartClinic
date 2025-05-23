import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";

const columns = [
  { field: "patient", headerName: "Patient", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "time", headerName: "Time", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      const status = params.value;
      const color =
        status === "Confirmed"
          ? "success"
          : status === "Pending"
          ? "warning"
          : "default";

      return (
        <Chip
          label={status}
          variant="outlined"
          color={color}
          sx={{ borderRadius: "6px", fontWeight: 500 }}
        />
      );
    },
  },
];

const AppointmentsTable = ({ rows }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "90%",
        mx: "auto",
        p: 2,
        "& .MuiDataGrid-root": {
          borderRadius: 2,
          boxShadow: 2,
          mt: 2,
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "rgb(155, 1, 37)",
          color: "Black",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f5f5f5",
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
