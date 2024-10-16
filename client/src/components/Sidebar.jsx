import React from 'react'
import Navbar from './Navbar'
import { LayoutDashboard } from 'lucide-react';


const Sidebar = () => {
  return (
    <>

    {/* <div className=' overflow-y-scroll'> */}
    {/* <div className=' fixed top-0 left-0 w-full'><Navbar/></div> */}
    <Navbar/>
    
<div className="drawer lg:drawer-open flex overflow-y-auto pt-11 h-screen">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-side drawer-open h-full ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
    <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
      

      <li className=' flex'>  <a> <LayoutDashboard/> Dashboard</a></li>
    </ul>
  </div>
  <div className="drawer-content text-stone-950 bg-[#F5F6FA] h-full w-full">
    {/* use layout here */}
  </div>



</div>
{/* </div> */}
    
    
    
    </>
  )
}

export default Sidebar