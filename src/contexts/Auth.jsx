import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggenIn, setUserLoggenIn] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, initializeUser);
    return unSubscribe;
  }, []);

  async function initializeUser(user) {
    // console.log(user.uid)
    if (user) {
      setCurrentUser({ ...user });
      const docRef = doc(db, "users", user.uid);
      // console.log(docRef)
      const docSnap = await getDoc(docRef);
      // console.log(docSnap)
      const role = docSnap.data().role;
      // console.log(role)

      setRole(role);
      setUserLoggenIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggenIn(false);
      setRole("");
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggenIn,
    role,
    loading,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
