import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

//Styles
import { LoginWrapper, LoginContainer, LoginContent } from "./LoginForm.styles";

// Components
import Spinner from "../Spinner";

const LoginForm = () => {
  const { logIn, error, isLoggedIn } = useContext(UserContext);

  const [details, setDetails] = useState({ username: "" });

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(details);
  };

  const handleUsernameChange = (event) => {
    setDetails({ ...details, username: event.target.value });
  };

  return (
    <LoginWrapper>
      <LoginContainer onSubmit={handleSubmit}>
        <h2>Sign In Here!</h2>
        {error !== "" ? <div className="errormsg">{error} </div> : ""}
        <LoginContent>
          {error == "" ? <label htmlFor="username">Username</label> : null}
          <input
            placeholder="Enter Username"
            className="box"
            type="text"
            name="username"
            onChange={handleUsernameChange}
            required
            value={details.username}
          />
          <input type="submit" value="login" className="button" />
          {isLoggedIn && navigate("/welcome")}
        </LoginContent>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginForm;
