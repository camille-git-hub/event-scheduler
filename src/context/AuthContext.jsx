import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken); 
    setLoading(false); 
  }, []);

  function loginUser(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  function logoutUser() {
    setToken(null);
    localStorage.removeItem("token");
  }

  const isAuthenticated = Boolean(token);

  const value = {
    token,
    isAuthenticated,
    loading,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
