import React from "react";
import { Link } from "react-router-dom";
import {
  NotFoundContent,
  NotFoundVid,
  NotFoundWrapper,
  NotFoundBtn,
  NotFoundText,
  NotFoundH1,
  NotFoundH3,
} from "./NotFound.styles";
import video from "../../videos/lost.mp4";

const NotFound = () => {
  return (
    <div>
      <NotFoundWrapper>
        <NotFoundH1>Error 404 - This Page Has Not Been Found</NotFoundH1>
        <NotFoundContent>
          <NotFoundVid autoPlay loop muted src={video} type="video/mp4" />

          <NotFoundText>Click to go Home</NotFoundText>
          <NotFoundBtn>
            <Link to="/">
              <button>HomePage</button>
            </Link>
          </NotFoundBtn>
        </NotFoundContent>
      </NotFoundWrapper>
    </div>
  );
};

export default NotFound;
