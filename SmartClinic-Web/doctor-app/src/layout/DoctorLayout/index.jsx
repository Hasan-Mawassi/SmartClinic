// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/SideBar';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navbar from '../../components/common/Navbar';

const Layout = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
    </>
      
      
  );
};

export default Layout;
