import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './components/layout/DashboardLayout'
import ProtectedRoute, { ProtectedRouteProps } from './helpers/protected-route'
import Login from './pages/newlogin'
import type {} from '@mui/x-data-grid/themeAugmentation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { inactivityTiming } from '@/states/state'
import { useRecoilState } from 'recoil'
import { theme } from '@/theme'
import {  CssBaseline } from '@mui/material'
import {  useCallback, useState } from 'react'
import { LocalStorageService } from './helpers/local-storage-service'
import Dashboard from './pages/dashboard/dashboard.page'
import { ThemeProvider } from '@mui/material/styles'


function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    authenticationPath: '/login',
  }
  const [inactivity, setinactivityTiming] = useRecoilState(inactivityTiming)
  const [warningOpen, setWarningOpen] = useState(false)
  const localStorageService = new LocalStorageService()


  const handleInactivity = () => {
    if (localStorageService.get_accesstoken() != null) {
      setWarningOpen(true)
    }  }
  
  const handleLogout = useCallback(() => {
    if (localStorageService?.get_accesstoken() != null) {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }
  }, [])                                      
  // const INACTIVITY_TIME = 1 * 60 * 1000 // 1 minutes
  // // ✅ Enable auto logout (30 min inactivity)
  // // useAutoLogout(handleLogout, Number(inactivity) * 60000 > INACTIVITY_TIME ? Number(inactivity) * 60000 : INACTIVITY_TIME)
  // useAutoLogout(handleInactivity, Number(inactivity) * 60000 > INACTIVITY_TIME ? Number(inactivity) * 60000 : INACTIVITY_TIME)

  return (
    <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <LoaderBackdrop /> */}
        {/* <Message /> */}
        <ToastContainer />
        {/* <InactivityWarningModal open={warningOpen} onStay={() => setWarningOpen(false)} onLogout={handleLogout} /> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DashboardLayout />} />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="*" element={<Dashboard />} />
            </Route> */}
                <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="*" element={<Dashboard />} />
    </Route>

            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App


