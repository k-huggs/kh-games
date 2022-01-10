import React from "react";

// Styles
import { HomeWrapper, HeroImg, HomeContent } from "./Home.styles";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>This will be a picture</h1>
      <HeroImg />
      <h2>hero snap</h2>
      <HomeContent>
        <p>This is where we will have content </p>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
