import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = 'http://localhost:8000/api';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTHO_DOMAIN}
    clientId={import.meta.env.VITE_AUTHO_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin || "http://localhost:5173",
      audience : "AIviewuniqueIdentifier",
    }}
  >
    <App />
  </Auth0Provider>,
)
