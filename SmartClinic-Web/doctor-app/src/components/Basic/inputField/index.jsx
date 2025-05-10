import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import './style.css'
const inputField = ({
    id = 'custom-textfield',
    value,
    inputLabel,
    onChange,
    variant = 'outlined',
    type = 'text',
    icon: Icon,
    fullWidth = true,
    ...props
  }) => {

    return (
        <div className='input-field-container'>
        <label htmlFor={id} className='input-label'>{inputLabel} </label>
        <TextField
        className='input-field'
        id={id}
        variant={variant}
        value={value}
        onChange={onChange}
        type={type}
        fullWidth={fullWidth}
        InputProps={{
            startAdornment: Icon ? (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ) : null,
          }}
        {...props}
      />
      </div>
    );

};

export default inputField;