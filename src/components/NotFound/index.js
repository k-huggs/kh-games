import React from "react";
import { Link } from "react-router-dom";
import {
  NotFoundContent,
  NotFoundVid,
  NotFoundWrapper,
  NotFoundBtn,
  NotFoundH1,
  VidWrapper,
} from "./NotFound.styles";
import video from "../../videos/lost.mp4";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundH1>This Page Has Not Been Found</NotFoundH1>
      <NotFoundContent>
        <NotFoundVid autoPlay loop muted src={video} type="video/mp4" />
      </NotFoundContent>

      <NotFoundBtn>
        <Link to="/">
          <button>HomePage</button>
        </Link>
      </NotFoundBtn>
    </NotFoundWrapper>
  );
};

export default NotFound;
