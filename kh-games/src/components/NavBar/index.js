import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

//Styles
import { Nav, NavBarContent, NavBarBtn, HomeBtn } from "./NavBar.styles";
import * as BiIcons from "react-icons/bi";

const NavBar = () => {
  const { isLoggedIn, logOut } = useContext(UserContext);
  const handleClick = () => {
    logOut();
  };
  // <selec> <option> for the categories
  return (
    <Nav>
      <HomeBtn>
        <Link to="/">
          <h2>KH Games</h2>
        </Link>
      </HomeBtn>
      <NavBarContent>
        <Link to="/categories">
          <span className="categories">Categories</span>
        </Link>
        <Link to="/users">
          <span className="users">Users</span>
        </Link>
        <Link to="/reviews">
          <span className="reviews">Reviews</span>
        </Link>
      </NavBarContent>
      <NavBarBtn>
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="logout" onClick={handleClick}>
              Log Out
            </button>
          </Link>
        )}

        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </NavBarBtn>
    </Nav>
  );
};

export default NavBar;
