import React from 'react'
import Navbar from '../components/Navbar'
import { LayoutDashboard } from 'lucide-react';


const Sidebar = () => {
  return (
    <>

    {/* <div className=' overflow-y-scroll'> */}

    <Navbar/>
<div className="drawer lg:drawer-open fixed">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center bg-[#F5F6FA]">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
    <ul className="menu bg-white text-base-content min-h-full w-80 p-4 fixed">
      {/* Sidebar content here */}
      {/* instead of a use Link form react router dom */}

      <li className=' flex'>  <a> <LayoutDashboard/> Dashboard</a></li>
      {/* <li><a>Sidebar Item 2</a></li> */}
    </ul>
  </div>
</div>
{/* </div> */}
    
    
    
    </>
  )
}

export default Sidebar