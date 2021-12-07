import React, { createContext } from "react";
import UsefireBase from "./../useFirebase/UsefireBase";
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = UsefireBase();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
