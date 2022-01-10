import React from "react";
import { Link } from "react-router-dom";
//Styles
import { NotFoundContent, NotFoundWrapper } from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContent>
        <p>Wrong Ends My G</p>
      </NotFoundContent>
    </NotFoundWrapper>
  );
};

export default NotFound;
