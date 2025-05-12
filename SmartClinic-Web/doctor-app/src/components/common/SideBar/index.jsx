import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
  Divider,
  Tooltip,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  EventNote as EventNoteIcon,
} from '@mui/icons-material';

import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 72;

const navItems = [
  { text: 'Dashboard', path: '/doctor/dashboard', icon: <DashboardIcon /> },
  { text: 'Patients', path: '/doctor/patients', icon: <PeopleIcon /> },
  { text: 'Schedule', path: '/doctor/schedule', icon: <EventNoteIcon /> },
];

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: collapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 0.3s',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: collapsed ? 'center' : 'flex-end',
          px: 1,
        }}
      >
        <Box
    component="img"
    src="/logo.png" 
    alt="Logo"
    sx={{
      height: 150,
      width: collapsed ? 40 : 120,
      objectFit: 'contain',
      transition: 'width 0.3s',
    }}
  />
        <IconButton onClick={toggleCollapsed}>
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Tooltip
            key={item.text}
            title={collapsed ? item.text : ''}
            placement="right"
          >
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? 'auto' : 2,
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}
