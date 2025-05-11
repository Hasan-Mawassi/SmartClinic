import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const NewMedicineCard = ({ title = "New Prescription", medicines = [] }) => {
  return (
    <Card sx={{ width: '100%', maxWidth: 300, borderRadius: 3 }}>
      <CardContent>
        {/* Title with Icon */}
        <Box display="flex" alignItems="center" mb={2}>
          <MedicalServicesIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* Numbered List */}
        {medicines.length > 0 ? (
          <List>
            {medicines.map((medicine, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${medicine}`} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="textSecondary">
            No new medicines added.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default NewMedicineCard;
