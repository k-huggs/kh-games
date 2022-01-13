import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const adminUser = { username: "jessjelly", password: "password123" };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({ username: details.username, password: details.password });
      setError("");
      setIsLoggedIn(true);
      console.log("if block");
    } else {
      setError("Details are incorrect please ammend");
      setIsLoggedIn(false);
    }
  };

  const logOut = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, logOut, logIn, isLoggedIn, adminUser, logOut }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

// Refactor
