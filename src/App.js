import './_App.scss'
import DefaultLayout from './Pages/DefaultLayout'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  )
}

export default App;
