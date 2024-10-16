import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { LayoutDashboard } from 'lucide-react'
import LogoutButton from '../components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { TokenContext } from '../../context/tokenContext'
import Notauth from '../components/Notauth'


const UserPage = () => {

  const {token,setToken} = useContext(TokenContext)
  const navigate = useNavigate()
  const {user,getAccessTokenSilently,isAuthenticated,loginWithRedirect,isLoading} = useAuth0()
  
  
  useEffect(()=>{

    const gettoken = async()=>{
      // console.log(isAuthenticated);
      
      if(!isAuthenticated){
        return
      }
      try {
        const temptoken = await getAccessTokenSilently()
        setToken(temptoken)
        console.log(token);
        
      } catch (error) {
        console.log(error);
      }
    }
    
    
    gettoken()
    
  },[isAuthenticated])
  if(isLoading)return(<div>loading...</div>)
  if(!isAuthenticated)return(<Notauth/>)
  return (
    <>
    {console.log(token)}
<Navbar/>

<div className="drawer lg:drawer-open flex overflow-y-auto pt-11 h-screen">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-side drawer-open h-full ">
<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white"></label>
<ul className="menu bg-white text-base-content min-h-full w-80 p-4 flex justify-between">
  
<div className=' flex flex-col gap-3'>
  <li className=' flex'>  <NavLink to={''} end> <LayoutDashboard/> Dashboard</NavLink></li>
  <li className=' flex'>  <NavLink to={'bookmarks'}> <LayoutDashboard/> Bookmarks</NavLink></li>
  <li className=' flex'>  <NavLink to={'pricing'}> <LayoutDashboard/> Pricing</NavLink></li>
</div>
<div className=' flex flex-col gap-2'>
  <li className=' flex'>  <NavLink to={'setting'}> <LayoutDashboard/> Settings</NavLink></li>
  <li className=' flex'>  <NavLink to={'setting'}> <LayoutDashboard/> Logout</NavLink></li>

</div>

</ul>
</div>
<div className="drawer-content text-stone-950 bg-[#F5F6FA] h-full w-full p-3">
{/* use layout here */}
<Outlet/>
</div>



</div>
    </>
  )
}

export default UserPage