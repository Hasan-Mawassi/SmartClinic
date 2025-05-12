import './App.css'
import Auth from './pages/auth'
import { Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './layout/DoctorLayout'
import Patient from './pages/Patient'
import Schedule from './pages/Schedule'
import Appointment from './pages/Apointment'
import Profile from './pages/Profile'
function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
        <Route path="doctor" element={<Layout />}> 
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path='patients' element={<Patient />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='appointment' element={<Appointment />} />
          <Route path='profile' element={<Profile />} />
        </Route>
  </Routes>
  )
}

export default App
