import { createContext ,useContext , useState , useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const {isAuthenticated , getAccessTokenSilently} = useAuth0()
  
  
  
    useEffect(() => {
      const fetchUser = async () => {
        if(!isAuthenticated)return
        try {
          const response = await getAccessTokenSilently()
          setToken(response)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUser();
    }, []);
    return (
      <TokenContext.Provider value={ {token , setToken} }>
        {children}
      </TokenContext.Provider>
    );
  }