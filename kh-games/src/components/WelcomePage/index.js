import React from "react";

//Styles
import {
  WelcWrapper,
  WelcBg,
  VideoBg,
  Content,
  ButtonWrapper,
} from "./WelcomePage.styles";
import video from "../../videos/video.mp4";

const WelcomePage = ({ user, logOut }) => {
  return (
    <WelcWrapper>
      <WelcBg>
        <VideoBg autoPlay loop musted src={video} type="video/mp4" />
        <Content>
          <h1>Welcome {user.username}</h1>
          <ButtonWrapper>
            <button>Home</button>
            <button onClick={logOut}>Log Out</button>
          </ButtonWrapper>
        </Content>
      </WelcBg>
    </WelcWrapper>
  );
};

export default WelcomePage;
