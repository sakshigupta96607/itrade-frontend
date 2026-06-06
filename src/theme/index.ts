// theme.ts
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0061B1',
      light: '#CDEDFF',
    },
    secondary: {
      main: '#0A1C2C',
      light: '#c2d9ee',
    },
    text: {
      primary: '#0A1C2C',
      secondary: '#455A64',
    },
    background: {
      default: '#F8FAFC',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F8FAFC',
          color: '#0A1C2C',
          transition: 'all 0.3s ease',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 1px 4px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0A1C2C',
          color: '#ffffff',
          borderRight: 'none',
        },
      },
    },
  },
});