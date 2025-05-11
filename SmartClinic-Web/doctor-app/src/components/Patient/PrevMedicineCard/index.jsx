import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const MedicineCard = ({ availableDates, medicinesByDate }) => {
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 300, borderRadius: 3 , border: '1px solid #a0a0a0',boxShadow: 0}}>
      <CardContent>
        {/* Date Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="date-select-label">Select Date</InputLabel>
          <Select
            labelId="date-select-label"
            value={selectedDate}
            label="Select Date"
            onChange={handleChange}
          >
            {availableDates.map((date) => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Medicines List */}
        <Typography variant="h6" gutterBottom>
          Previous Medicines List
        </Typography>
        <List>
          {(medicinesByDate[selectedDate] || []).map((medicine, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${medicine}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
