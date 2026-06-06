import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  InputBase,
} from "@mui/material";
import {
  NotificationsNone,
  HelpOutline,
  Search,
} from "@mui/icons-material";

const Header = ({ 
  
  isCollapsed }) => {
  const sidebarWidth = isCollapsed ? 80 : 280;

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ml: { sm: `${sidebarWidth}px` },
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid #E2E8F0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: 'width 0.3s ease, margin 0.3s ease', // Smooth slide effect
      }}
    >
      <Toolbar sx={{ minHeight: '72px !important', px: { xs: 2, sm: 4 } }}>
        {/* Breadcrumbs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: '#64748B', fontSize: '15px' }}>
            Workspace
          </Typography>
          <Typography sx={{ color: '#64748B', fontSize: '15px' }}>/</Typography>
          <Typography sx={{ color: '#0F172A', fontSize: '15px', fontWeight: 600 }}>
            Dashboard
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center',
            maxWidth: '500px',
            mx: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#F8FAFC',
              borderRadius: '8px',
              padding: '6px 16px',
              width: '100%',
              border: '1px solid transparent',
              transition: 'all 0.2s',
              '&:hover': { border: '1px solid #E2E8F0' }
            }}
          >
            <Search sx={{ color: '#94A3B8', fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search transactions, beneficiaries, references..."
              sx={{ flex: 1, color: '#0F172A', fontSize: '14px' }}
            />
          </Box>
        </Box>

        {/* Right Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="small" sx={{ color: '#64748B' }}>
            <HelpOutline sx={{ fontSize: 22 }} />
          </IconButton>
          
          <IconButton size="small" sx={{ color: '#64748B' }}>
            <Badge 
              variant="dot" 
              sx={{ 
                '& .MuiBadge-badge': { backgroundColor: '#EF4444', right: 3, top: 3 } 
              }}
            >
              <NotificationsNone sx={{ fontSize: 22 }} />
            </Badge>
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 1 }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right' }}>
              <Typography sx={{ color: '#0F172A', fontWeight: 600, fontSize: '14px', lineHeight: 1.2 }}>
                John Doe
              </Typography>
              <Typography sx={{ color: '#64748B', fontSize: '12px' }}>
                Trade Officer
              </Typography>
            </Box>
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#E0F2FE', color: '#0284C7', fontSize: '14px', fontWeight: 600 }}>
              JD
            </Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;