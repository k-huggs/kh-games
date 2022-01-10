import React, { useEffect, useState } from "react";

// Styles
import { LoginWrapper, LoginContent } from "./LoginPage.styles";

// Components
import LoginForm from "../LoginForm";
import WelcomePage from "../WelcomePage";

const LoginPage = () => {
  const adminUser = { username: "jessjelly", password: "password123" };
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const logIn = (details) => {
    // console.log(details, adminUser, "<< deets login page");
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({ username: details.username, password: details.password });
      setError("");
      console.log("if block");
    } else {
      setError("Details are incorrect please ammend");
    }
  };

  const logOut = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Login page</h1>
      {user.username !== "" ? (
        <WelcomePage user={user} logOut={logOut} />
      ) : (
        <LoginForm logIn={logIn} error={error} />
      )}
    </div>
  );
};

export default LoginPage;
