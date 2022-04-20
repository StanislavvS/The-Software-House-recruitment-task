import React, { createContext, useContext, useState, FC } from "react";

const AuthContext = createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [loggedIn, setLoggIn] = useState(false);

  const login = () => {};

  const logout = () => {};

  const authContextValue = {
    login,
    loggedIn,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...children} />;
};

const useAuth = () => useContext(AuthContext);
