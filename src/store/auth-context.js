import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userId: (userid) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userisLoggedin = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userisLoggedin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.childern}
    </AuthContext.Provider>
  );
};

export default AuthContext;
