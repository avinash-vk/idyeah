import React,{useContext,useState,useEffect} from 'react';
import {auth,googleProvider} from './';

import Alert from '../components/Alert';
export const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState("");
    
    const [statusAlert, setStatusAlert] = useState(''); 
    
      function logout() {
        return auth.signOut()
      }
      
      async function googleSignin(){
        try {
          await auth.signInWithPopup(googleProvider)
        } 
        catch(e) {
          setErrors(e.message)
        }
      }

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])

    return (
        <AuthContext.Provider
            value = {{
                currentUser,
                logout,
                googleSignin,
                errors,
                setErrors,
                statusAlert,
                setStatusAlert
            }} 
        >
            {children}
            <Alert statusAlert={statusAlert} closeStatusAlert={()=>setStatusAlert('')} />
        </AuthContext.Provider>
    )
}