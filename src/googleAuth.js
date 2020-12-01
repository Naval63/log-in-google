import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

export const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: '1094702354192-044bat442qog760vtq2tupt4fq0qv49n.apps.googleusercontent.com', 
  })
  
  return (
    <GoogleAuthContext.Provider 
      value={googleAuth}
    >
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
