import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Nav, NavBarContent, NavBarBtn } from "./NavBar.styles";
import * as BiIcons from "react-icons/bi";

const NavBar = () => {
  // <selec> <option> for the categories
  return (
    <Nav>
      <Link to="/">
        <BiIcons.BiGame />
        <h2>KH Games</h2>
      </Link>
      <NavBarContent>
        <Link to="/categories">
          <button className="categories">Categories</button>
        </Link>
        <Link to="/users">
          <span className="users">Users</span>
        </Link>
        <Link to="/reviews">
          <span className="reviews">Reviews</span>
        </Link>
      </NavBarContent>
      <NavBarBtn>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </NavBarBtn>
    </Nav>
  );
};

export default NavBar;
