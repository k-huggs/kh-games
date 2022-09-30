import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (details) => {
    if (details.username) {
      setUser(details);
      setError("");
      setIsLoggedIn(true);
    } else {
      
      setIsLoggedIn(false);
    }
  };

  const logOut = () => {
    setUser({ username: "" });
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logOut,
        logIn,
        isLoggedIn,
        error,
        setError
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

// Refactor
