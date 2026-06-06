import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { theme } from "../../theme/index.ts";

export default function DashboardLayout() {
  // Lifted state to manage collapse globally across the layout
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        
        {/* Pass state and setter to Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column',
            width: `calc(100% - ${isCollapsed ? 80 : 280}px)`,
            transition: 'width 0.3s ease',
          }}
        >
          {/* Pass state to Header so it can adjust its width */}
          <Header isCollapsed={isCollapsed} />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: { xs: 2, sm: 4 },
              mt: '72px', // Height of the Header
              backgroundColor: "#ffffff",
              minHeight: "calc(100vh - 72px)",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}