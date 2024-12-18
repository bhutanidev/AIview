import { createRoot } from 'react-dom/client'
import 'regenerator-runtime/runtime';
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios'
import './index.css'
import { TokenProvider } from './context/tokenContext.jsx';
import { InterviewProvider } from './context/InterviewContext.jsx';


axios.defaults.baseURL = 'http://localhost:8000/api';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTHO_DOMAIN}
    clientId={import.meta.env.VITE_AUTHO_CLIENTID}
    authorizationParams={{
      redirect_uri: "http://localhost:5173/user",
      audience : import.meta.env.VITE_AUDIENCE,
    }}
  >
  <InterviewProvider>
  <TokenProvider>
    <App />
  </TokenProvider>
  </InterviewProvider>
  </Auth0Provider>
)
