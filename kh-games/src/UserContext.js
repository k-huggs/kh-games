import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const adminUser = { username: "jessjelly" };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (details) => {
    if (details.username === adminUser.username) {
      setUser({ username: details.username });
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Correct username is 'jessjelly'");
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
        adminUser,
        logOut,
        error,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

// Refactor
