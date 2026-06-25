import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          I-Trade Admin
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        User
      </Toolbar>
    </AppBar>
  );
};

export default Header;