import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

//Styles
import {
  WelcWrapper,
  WelcBg,
  VideoBg,
  Content,
  ButtonWrapper,
  H1, ButtonHome
} from "./WelcomePage.styles";
import video from "../../videos/home.mp4";

const WelcomePage = () => {
  const { user, logOut } = useContext(UserContext);
  console.log(user)
  return (
    <WelcWrapper>
      <WelcBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </WelcBg>
      <Content>
        {user.username ? <H1>Welcome {user.username} to KH Games </H1> : <H1>Welcome to KH Games</H1>}
        <ButtonWrapper>
          <Link to="/">
            <ButtonHome className="home">Home</ButtonHome>
          </Link>
          <Link to="/login">
            <button className="logout" onClick={logOut}>
              Log Out
            </button>
          </Link>
        </ButtonWrapper>
      </Content>
    </WelcWrapper>
  );
};

export default WelcomePage;
