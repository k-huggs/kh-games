import React from "react";

// Styles
import { LoginWrapper, LoginContainer, LoginContent } from "./LoginPage.styles";

// Components
import LoginForm from "../LoginForm";

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
