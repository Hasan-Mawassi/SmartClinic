import './App.css'
import Auth from './pages/auth'
import { Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './layout/DoctorLayout'
function App() {

  

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}> 
          <Route path="/dashboard" element={<Dashboard/>} />
        
        </Route>
  </Routes>
  )
}

export default App
