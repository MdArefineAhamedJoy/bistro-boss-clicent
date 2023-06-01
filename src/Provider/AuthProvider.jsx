import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios'


export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email , password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const loginGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const userUpdateProfile = (name , url) =>{
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: url
    })
  }

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email : currentUser.email})
        .then(data => {
          const userData = data.data
          localStorage.setItem('access-token', userData)
          setLoading(false);
        })
      }
      else{
         localStorage.removeItem("access-token")
      }


    });
    return () => {
      return unSubscript();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    loginGoogle,
    logOut,
    userUpdateProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
