import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const getFormattedDate = () => {
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return today.toLocaleDateString('en-GB', options);
};

const getPageName = (pathname) => {
  const page = pathname.split('/')[1] || 'dashboard';
  return page.charAt(0).toUpperCase() + page.slice(1);
};

export default function Navbar() {
  const location = useLocation();
  const pageName = getPageName(location.pathname);

  return (
    <AppBar position="static" elevation={0} color="default"  sx={{width: '100%', boxShadow: 'none'}}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 0,
          width: '100%',
        }}
      >
        <Typography variant="h4" color="text.primary" sx={{
    fontSize: {
      xs: '1.5rem', 
    },
  }}>
          {pageName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {getFormattedDate()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
