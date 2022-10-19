import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()

  //  Create User With Email and Password

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Update Name

  const updateName = name => {
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name })
  }

  // Verify Email

  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }

  // Password Reset

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  //  LogIn With Email and Password

  const userLogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //  Google LogIn
  const googleSignUp = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // LogOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  // User Observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false)
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    } 
  }, [])

  const authInfo = { user, createUser, updateName, verifyEmail, resetPassword, userLogIn, googleSignUp,logOut,loading };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;