import React from "react";
import { Box, Typography, Paper, Grid2 ,CircularProgress} from "@mui/material";
import { calculateAge } from "../../../utils/calculateAge";
const PatientCard = ({ patient ,loading=false }) => {
  return (
    <> 
   { !loading ?  (<Paper
      elevation={3}
      sx={{ p: 2, borderRadius: 3, width: "100%" , boxShadow: 0,border: "1px solid #ccc",}}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={2} flexWrap={"wrap"}>
        <Typography variant="h6" fontWeight="bold">
          Patient Info:
        </Typography>
        <Typography variant="h6" color="primary">
          {patient.name}
        </Typography>
      </Box>

      {/* Content */}
      <Grid2 container spacing={2} alignItems="center" display="flex" flexDirection="row" justifyContent={"space-between"} wrap="wrap" >
        {/* Image */}
         <Box display="flex" flexDirection="row" gap={3} flexWrap={"wrap"}> 
        <Grid2 >
          <Box
            component="img"
            src={patient.image}
            alt="Patient"
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 2,
              border: "2px solid #ccc",
            }}
          />
        </Grid2>

        {/* Details */}
        <Grid2  size={{ xs: 'true'}}>
          <Box
            height={100}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="body1">
              <strong>Age & Weight:</strong> {calculateAge(patient.date_of_birth)} / {patient.weight}kg
            </Typography>
            <Typography variant="body1">
              <strong>Gender:</strong> {patient.gender}
            </Typography>
            <Typography variant="body1">
              <strong>Blood Group:</strong> {patient.bloodGroup}
            </Typography>
          </Box>
        </Grid2>
        </Box>
        {/* Past Surgery Status */}
        <Grid2 >
          <Box
            sx={{
              width: 180,
              height: 100,
              borderRadius: 2,
              border: "2px solid #ccc",
              backgroundColor: "#f0f0f0",
              color: "text.primary",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="caption" fontWeight="bold">
              Issue
            </Typography>
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {patient.surgeryName || "N/A"}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {patient.surgeryDate || "No Date"}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Paper>) :(
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    )}
      </>
  );
};

export default PatientCard;
