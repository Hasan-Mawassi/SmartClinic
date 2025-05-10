import './App.css'
import Auth from './pages/auth'
import { Route, Routes} from 'react-router-dom'
function App() {

  

  return (
    <Routes>
    <Route path="/auth" element={<Auth />} />
  </Routes>
  )
}

export default App
