//give login button on landing page no seperate page
//import login button for login
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LandingPage = () => {

    const {user,getAccessTokenSilently} = useAuth0()

    //for authentication
    const accessPublicRoute=async()=>{
        const{data}= await axios.get('/public')
        console.log(data);
      }
      const accessPrivateRoute=async()=>{
        const token = await getAccessTokenSilently()
        // console.log(token)
        const{data}= await axios.get('/private',{
          headers:{Authorization:`Bearer ${token}`,},
          withCredentials:true
        })
        console.log(data)
        
      }


  return (
    <div>LandingPage</div>
  )
}

export default LandingPage