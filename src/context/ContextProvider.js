import React, { createContext, useState } from "react";

export const LoginContext = createContext(null);

const Contextprovider = ({ children }) => {
  const [account, setAccount] = useState(""); // Initialize as an empty object
  console.log(account);

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  );
};

export default Contextprovider;
