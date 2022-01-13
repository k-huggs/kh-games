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
  H1,
} from "./WelcomePage.styles";
import video from "../../videos/home.mp4";

const WelcomePage = () => {
  const { user, logOut } = useContext(UserContext);

  return (
    <WelcWrapper>
      <WelcBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </WelcBg>
      <Content>
        <H1>Welcome {user.username} </H1>
        {/* <h1>Welcome {user.username}</h1> */}
        <ButtonWrapper>
          <Link to="/">
            <button className="home">Home</button>
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
