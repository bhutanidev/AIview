import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import axios from 'axios'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import Dashboard from './components/Dashboard'
import Instruction from './pages/Instruction'


function App() {

  const route = createBrowserRouter(

    createRoutesFromElements(
      <>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='user' element={<UserPage/>}>
        <Route path='' element={<Dashboard/>}/>
        <Route path='setting' element={<>settings</>}/>
        <Route path='pricing' element={<>pricing</>}/>
        <Route path='bookmarks' element={<>Bookmarks</>}/>

      </Route>
      <Route path='live' element={<Instruction/>}/>

      </>

    )

  )

  
  return (

    <>
    <RouterProvider router={route}>


    {/* <Login/> */}
    {/* <Register/> */}
    {/* <div className=' h-screen'> */}
    {/* <Navbar/> */}
    {/* <Sidebar/> */}
    {/* </div> */}
    {/* <button className="btn btn-wide" onClick={callfetch}>Test</button> */}
    </RouterProvider>
    </>
  )
}

export default App
