import { createTheme } from "@mui/material";

 export const theme = createTheme({
    palette: {
      primary: {
        main: '#0061B1',
        light: '#CDEDFF',
      },
      secondary: {
        main: '#0A1C2C',
        light: '#c2d9eeff',
      },
     text: {
  primary: '#0A1C2C',
  secondary: '#455A64',
}
    },
    // typography: {
    //   fontFamily: "'Inter', 'Roboto', sans-serif",
    //   h1: { color: 'text.primary' },
    //   h2: { color: 'text.primary' },
    //   h3: { color: 'text.primary' },
    //   h4: { color: 'text.primary' },
    //   h5: { color: 'text.primary' },
    //   h6: { color: 'text.primary' },
    // },
typography: {
   fontFamily: "'Roboto', 'Arial', sans-serif",
},
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#F8FAFC',
           color: '#0A1C2C',
            transition: 'all 0.3s ease',
          },
          /* Hide scrollbar globally */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',

          '#root': {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          },
        },
      },

      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .super-app-theme--header': {
              backgroundColor: '#005099',
              color: '#fff',
            },
            '& .MuiDataGrid-row:nth-of-type(even)': {
              backgroundColor: '#E3F2FD'
            },
            // '& .MuiDataGrid-row.Mui-selected': {
            //   backgroundColor: mode === 'dark' ? '#fff' : '#BBDEFB',
            // },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            transition: 'background-color 0.3s ease',
          },
        },
      },

      MuiDialog: {
        defaultProps: {
          disableEscapeKeyDown: true,
        },
        styleOverrides: {
          root: {
            '& .MuiBackdrop-root': {
              pointerEvents: 'none',
            },
          },
        },
      },

      //       MuiDialog: {
      //   defaultProps: {
      //     disableEscapeKeyDown: true
      //   }
      // }
    },
  })