import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy'; // AI icon

const TextCard = ({ title, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid #a0a0a0',
        width: { xs: '100%', md: '50%' },
        p: 3,
        boxSizing: 'border-box',
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <SmartToyIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export default TextCard;
