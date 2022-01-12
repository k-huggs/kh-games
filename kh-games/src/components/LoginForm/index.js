import React, { useState } from "react";

//Styles
import { LoginWrapper, LoginContainer, LoginContent } from "./LoginForm.styles";

const LoginForm = ({ logIn, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(details);
  };

  const handleUsernameChange = (event) => {
    setDetails({ ...details, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  return (
    <LoginWrapper>
      <LoginContainer onSubmit={handleSubmit}>
        <h2>Sign In Here!</h2>
        {error !== "" ? <div className="errormsg">{error} </div> : ""}
        <LoginContent>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            required
            value={details.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            required
            value={details.password}
          />
          <input type="submit" value="login" className="button" />
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginForm;
