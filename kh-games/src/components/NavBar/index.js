import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, NavBarContent } from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <h1>NavBar Will Be Ere'</h1>
      <NavBarContent>
        <ul>
          <span>
            <li>Categories</li>
          </span>
          <span>
            <li>Users</li>
          </span>
          <span>
            <li>Reviews</li>
          </span>
        </ul>
      </NavBarContent>
      <button>Login</button>
      <button>Register</button>
    </Wrapper>
  );
};

export default NavBar;
