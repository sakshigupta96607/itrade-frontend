import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";

export default function DashboardLayout() {
  return (
    <>
      <Header />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            ml: "240px",
            minHeight: "100vh"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}