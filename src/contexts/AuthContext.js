import React, {useEffect, useState } from 'react';
import firebaseConfig from '../firebase';
//import app from '../firebase';

export const AuthContext = React.createContext();

//export function useAuth(){
//    return useContext(AuthContext);
//}
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

//    function signup(email,password){
//       return auth.createUserWithEmailAndPassword(email,password);
//    }

    useEffect(() =>{
        //const unsubsribe = auth.onAuthStateChanged(user =>{
        firebaseConfig.auth().onAuthStateChanged((user) =>{
  
            setCurrentUser(user);
            setLoading(false);
        })
        //return unsubsribe;
    },[])

    //auth.onAuthStateChanged(user => {
    //    setCurrentUser(user);
    //})
    if (loading){
        return <p>Loading.....</p>;
    }
    
   // const value = {
   //     currentUser,
   //     signup
   // }
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}