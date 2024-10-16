import React from 'react'
import LoginButton from './LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const Notauth = () => {
    const navigate = useNavigate()
  return (
    <>
    <LoginButton/>
    <button className="btn btn-wide" onClick={() => navigate('/')}>Back to safety</button>
    </>
  )
}

export default Notauth