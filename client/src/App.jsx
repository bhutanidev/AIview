import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './pages/Sidebar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <div className=' h-screen'> */}
    {/* <Navbar/> */}
    <Sidebar/>
    {/* </div> */}
    </>
  )
}

export default App
