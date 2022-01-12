import React from "react";

// Styles
import { HomeWrapper, HeroBg, HeroVid, HomeContent } from "./Home.styles";
import video from "../../videos/home.mp4";

const Home = () => {
  return (
    <HomeWrapper>
      <HeroBg>
        <HeroVid src={video} autoPlay muted loop />
      </HeroBg>
      <HomeContent>
        <h1>Enter Text Here</h1>
        <p>This is where we will have content </p>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
