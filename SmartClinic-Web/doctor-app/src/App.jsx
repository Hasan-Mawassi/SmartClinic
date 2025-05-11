import './App.css'
import Auth from './pages/auth'
import { Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './layout/DoctorLayout'
import Patient from './pages/Patient'
function App() {

  

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}> 
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/patients' element={<Patient />} />
        </Route>
  </Routes>
  )
}

export default App
