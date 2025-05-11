import React from 'react';
import { Card, Stack } from '@mui/material';
import './style.css';
const CustomCard = ({ title, children }) => {
  return (
    <Card className='auth-card' >
      
        <h3  className='card-title'>
          {title}
        </h3>
    
      <Stack spacing={4} className='stack-width'>{children}</Stack >
    </Card>
  );
};

export default CustomCard;
