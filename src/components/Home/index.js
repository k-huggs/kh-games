import React from "react";

// Styles
import { HomeWrapper, HeroBg, HeroVid, HomeContent } from "./Home.styles";
import video from "../../videos/home.mp4";

// Component
import ReviewsPage from "../ReviewsPage";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HeroBg>
          <HeroVid src={video} autoPlay muted loop />
        </HeroBg>
        <HomeContent>
          <h1>Bringing Family and Friends Together</h1>
        </HomeContent>
      </HomeWrapper>
      <ReviewsPage />
    </>
  );
};

export default Home;
