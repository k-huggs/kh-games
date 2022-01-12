import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value="jessjelly">
      {props.children}
    </UserContext.Provider>
  );
};

// Refactor
