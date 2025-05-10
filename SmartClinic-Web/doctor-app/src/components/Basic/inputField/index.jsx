import React from 'react';
import TextField from '@mui/material/TextField';
import './style.css'
const inputField = ({
    id = 'custom-textfield',
    label,
    value,
    onChange,
    variant = 'outlined',
    type = 'text',
    fullWidth = true,
    ...props
  }) => {

    return (
        <TextField
        className='input-field'
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        type={type}
        fullWidth={fullWidth}
        {...props}
      />
    );

};

export default inputField;