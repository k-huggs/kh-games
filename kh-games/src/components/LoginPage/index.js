import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import { LoginWrapper, LoginContainer, LoginContent } from "./LoginPage.styles";

// Components
import LoginForm from "../LoginForm";
import WelcomePage from "../WelcomePage";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <h1>Sign In Here</h1>
        <LoginForm />
      </LoginContainer>
    </LoginWrapper>
  );
};

export default LoginPage;

{
  /* {user.username !== "" ? (
          <WelcomePage user={user} logOut={logOut} />
        ) : (
          <LoginForm logIn={logIn} error={error} />
        )} */
}
