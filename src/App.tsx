import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './components/shared-layout'
import ProtectedRoute, { ProtectedRouteProps } from './helpers/protected-route'
import Login from './pages/newlogin'
import type {} from '@mui/x-data-grid/themeAugmentation'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

// import CustomSnackbar from './components/customsnackbar/snackbar'

// import GifModal from './components/successModal'

import Dashboard from './pages/dashboard/dashboard.page'

import { inactivityTiming, themeModeState } from '@/states/state'
import { useRecoilState } from 'recoil'
import { CssBaseline } from '@mui/material'

import { lazy, useCallback, useEffect, useState } from 'react'
import { useAutoLogout } from './helpers/useAutoLogout'
import { LocalStorageService } from './helpers/local-storage-service'
import EnhancedDashboard from './pages/dashboard/dashboard-new'
// import InactivityWarningModal from './components/inactivity-modal'


function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
  }
  const [mode, setMode] = useRecoilState(themeModeState)
  const [inactivity, setinactivityTiming] = useRecoilState(inactivityTiming)
  const [warningOpen, setWarningOpen] = useState(false)
  const local_service: any = new LocalStorageService()

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#0061B1',
        light: '#CDEDFF',
      },
      secondary: {
        main: '#0A1C2C',
        light: '#c2d9eeff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#0A1C2C',
        secondary: mode === 'dark' ? '#B0BEC5' : '#455A64',
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      h1: { color: 'text.primary' },
      h2: { color: 'text.primary' },
      h3: { color: 'text.primary' },
      h4: { color: 'text.primary' },
      h5: { color: 'text.primary' },
      h6: { color: 'text.primary' },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === 'dark' ? '#0B151D' : 'white',
            color: mode === 'dark' ? '#fff' : '#000',
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
              backgroundColor: mode === 'dark' ? '#143752' : '#e3f2fd',
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
            backgroundColor: mode === 'dark' ? '#0A1C2C' : '#ffffff',
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
  const handleInactivity = () => {
    if (local_service.get_accesstoken() != null) {
      setWarningOpen(true)
    }
  }
  const handleLogout = useCallback(() => {
    if (local_service?.get_accesstoken() != null) {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }
  }, [])
  const INACTIVITY_TIME = 1 * 60 * 1000 // 1 minutes
  // ✅ Enable auto logout (30 min inactivity)
  // useAutoLogout(handleLogout, Number(inactivity) * 60000 > INACTIVITY_TIME ? Number(inactivity) * 60000 : INACTIVITY_TIME)
  useAutoLogout(handleInactivity, Number(inactivity) * 60000 > INACTIVITY_TIME ? Number(inactivity) * 60000 : INACTIVITY_TIME)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <LoaderBackdrop /> */}
        {/* <Message /> */}
        <ToastContainer />
   
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DashboardLayout />} />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="dash" element={<Dashboard />} />
              <Route path="*" element={<Dashboard />} />
            </Route>

            <Route path="login" element={<Login />} />
            {/* <Route path="transaction/response" element={<GifModal />} /> */}
         
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

function handleLogout(): void {
  throw new Error('Function not implemented.')
}
