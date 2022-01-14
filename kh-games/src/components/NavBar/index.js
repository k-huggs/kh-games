import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

//Styles
import {
  Nav,
  NavBarContent,
  NavBarBtn,
  NavLink,
  Bars,
  NavBtnLink,
} from "./NavBar.styles";

const NavBar = () => {
  const { isLoggedIn, logOut } = useContext(UserContext);
  const handleClick = () => {
    logOut();
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h2>KHGames</h2>
        </NavLink>
        <Bars />
        <NavBarContent>
          <NavLink to="/categories" className="categories">
            Categories
          </NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/reviews" className="reviews">
            Reviews
          </NavLink>
        </NavBarContent>

        <NavBarBtn>
          {!isLoggedIn ? (
            <NavBtnLink to="/login">
              <button className="login">Login</button>
            </NavBtnLink>
          ) : (
            <NavBtnLink to="/login">
              <button className="logout" onClick={handleClick}>
                Log Out
              </button>
            </NavBtnLink>
          )}
          <NavBtnLink to="/register">
            <button className="register">Register</button>
          </NavBtnLink>
        </NavBarBtn>
      </Nav>
    </>
  );
};

export default NavBar;
