import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Avatar,
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import {
  SendOutlined,
  MoveToInboxOutlined,
  AccessTimeOutlined,
  PersonOutline,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardArrowDown,
  Shield,
  BarChart,
  CreditCardOutlined,
} from "@mui/icons-material";

// Destructure props from layout
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const sidebarWidth = isCollapsed ? 80 : 280;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1565C0',
          color: '#ffffff',
          borderRight: 'none',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': { backgroundColor: 'transparent', my: '10px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '10px',
            border: '2px solid #1565C0',
          },
          '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'rgba(255, 255, 255, 0.6)' },
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: isCollapsed ? 'column' : 'row', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', px: isCollapsed ? 0 : 3, py: 2.5, gap: isCollapsed ? 2 : 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Shield sx={{ fontSize: 32, color: '#ffffff' }} />
          {!isCollapsed && (
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, fontSize: '18px' }}>
              ITRADE
            </Typography>
          )}
        </Box>
        <IconButton onClick={toggleSidebar} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '8px', p: 1, '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' }}}>
          {isCollapsed ? <KeyboardDoubleArrowRight sx={{ color: '#ffffff', fontSize: 18 }} /> : <KeyboardDoubleArrowLeft sx={{ color: '#ffffff', fontSize: 18 }} />}
        </IconButton>
      </Box>

      <Box sx={{ px: isCollapsed ? 1.5 : 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ backgroundColor: isCollapsed ? 'transparent' : '#2A76D2', border: isCollapsed ? '1px solid rgba(255,255,255,0.1)' : 'none', borderRadius: '12px', p: isCollapsed ? 0.5 : 1.5, display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', width: '100%', justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
          <Avatar sx={{ width: isCollapsed ? 44 : 40, height: isCollapsed ? 44 : 40, background: 'linear-gradient(135deg, #2A3F9D 0%, #1A237E 100%)', color: '#ffffff', fontSize: '15px', fontWeight: 700, borderRadius: '10px' }}>
            AC
          </Avatar>
          {!isCollapsed && (
            <>
              <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Anglo Continent...</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', mt: 0.2 }}>Operating Account · ZAR</Typography>
              </Box>
              <KeyboardArrowDown sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 20 }} />
            </>
          )}
        </Box>
      </Box>

      <List sx={{ px: isCollapsed ? 1 : 2, '& .MuiListItemButton-root': { borderRadius: '10px', mb: 0.5, justifyContent: isCollapsed ? 'center' : 'flex-start', px: isCollapsed ? 0 : 2, py: 1.2 }, '& .MuiListItemIcon-root': { minWidth: 0, mr: isCollapsed ? 0 : 2, justifyContent: 'center' }}}>
        
        {/* OVERVIEW SECTION */}
        {!isCollapsed && <Typography sx={{ px: 2, py: 1, color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: 1 }}>OVERVIEW</Typography>}
        <ListItemButton sx={{ backgroundColor: '#3A8AEE', '&:hover': { backgroundColor: '#3A8AEE' } }}>
          <ListItemIcon sx={{ color: '#ffffff' }}><BarChart fontSize="medium" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }} />}
        </ListItemButton>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1.5, mx: isCollapsed ? 2 : 0 }} />

        {/* PAYMENTS SECTION */}
        {!isCollapsed && <Typography sx={{ px: 2, mt: 1, mb: 1, color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: 1 }}>PAYMENTS</Typography>}
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}><SendOutlined fontSize="small" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Outward Payment" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}><MoveToInboxOutlined fontSize="small" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Incoming" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}>
            <Badge badgeContent={5} sx={{ '& .MuiBadge-badge': { backgroundColor: '#EF4444', color: 'white', fontWeight: 'bold', top: 2, right: -2, minWidth: '18px', height: '18px', fontSize: '10px' } }}>
              <AccessTimeOutlined fontSize="small" />
            </Badge>
          </ListItemIcon>
          {!isCollapsed && (
            <>
              <ListItemText primary="Pending Approval" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />
              <Box sx={{ backgroundColor: '#EF4444', color: 'white', fontSize: '11px', fontWeight: 'bold', borderRadius: '10px', px: 1, py: 0.2 }}>5</Box>
            </>
          )}
        </ListItemButton>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1.5, mx: isCollapsed ? 2 : 0 }} />

        {/* COUNTERPARTIES SECTION */}
        {!isCollapsed && <Typography sx={{ px: 2, mt: 1, mb: 1, color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: 1 }}>COUNTERPARTIES</Typography>}
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}><PersonOutline fontSize="small" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Beneficiaries" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />}
        </ListItemButton>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1.5, mx: isCollapsed ? 2 : 0 }} />

        {/* REPORTS SECTION */}
        {!isCollapsed && <Typography sx={{ px: 2, mt: 1, mb: 1, color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: 1 }}>REPORTS</Typography>}
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}><CreditCardOutlined fontSize="small" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Cards" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.8)' }}><BarChart fontSize="small" /></ListItemIcon>
          {!isCollapsed && <ListItemText primary="Reports" primaryTypographyProps={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }} />}
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;