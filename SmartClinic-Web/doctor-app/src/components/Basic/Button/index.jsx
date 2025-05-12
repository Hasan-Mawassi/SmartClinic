import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'
const CustomButton = ({
  label,
  onClick,
  className,
  type = 'button',
  variant = 'contained',
  fullWidth = false,
  loading = false,
  disabled = false,
  sx = {},
  ...props
}) => {
  return (
    <Button
      className={`custom-button ${className ? ` ${className}` : ''}`}
      type={type}
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      sx={{ borderRadius: 1.8, textTransform: 'none',width:'40%' ,boxShadow: 'none',...sx }}
      {...props}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
};

export default CustomButton;
