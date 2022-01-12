import React from "react";
import { Link } from "react-router-dom";

//Styles
import {
  WelcWrapper,
  WelcBg,
  VideoBg,
  Content,
  ButtonWrapper,
  H1,
} from "./WelcomePage.styles";
import video from "../../videos/video.mp4";

const WelcomePage = ({ user, logOut }) => {
  return (
    <WelcWrapper>
      <WelcBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </WelcBg>
      <Content>
        <H1>Welcome</H1>
        {/* <h1>Welcome {user.username}</h1> */}
        <ButtonWrapper>
          <Link to="/">
            <button className="home">Home</button>
          </Link>
          <button className="logout" onClick={logOut}>
            Log Out
          </button>
        </ButtonWrapper>
      </Content>
    </WelcWrapper>
  );
};

export default WelcomePage;
