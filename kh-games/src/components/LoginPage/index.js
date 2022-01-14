import React from "react";

// Styles
import { LoginWrapper, LoginContainer, LoginContent } from "./LoginPage.styles";

// Components
import LoginForm from "../LoginForm";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};

export default LoginPage;
