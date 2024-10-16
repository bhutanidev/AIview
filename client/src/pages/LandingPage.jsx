//give login button on landing page no seperate page
//import login button for login
import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton'
import { LogOut } from 'lucide-react'
import LogoutButton from '../components/LogoutButton'
import { TokenContext } from '../../context/tokenContext'


const LandingPage = () => {

  const {token} = useContext(TokenContext)


  return (
    <>
    {/* {console.log(user)} */}
    {console.log(token)}
    <div>LandingPage</div>
    <LoginButton/>
    <LogoutButton/>
    </>
  )
}

export default LandingPage