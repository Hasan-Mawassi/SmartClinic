// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/SideBar';
import { Box, CssBaseline, Toolbar } from '@mui/material';

const Layout = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
    </>
      
      
  );
};

export default Layout;
