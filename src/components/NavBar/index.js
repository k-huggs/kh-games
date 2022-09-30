import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

//Styles
import {
  Nav,
  NavBarContent,
  NavBarBtn,
  NavLink,
  Bars,
  NavBtnLink,
  NavBarUser
} from "./NavBar.styles";

const NavBar = () => {
  const { isLoggedIn, logOut, user } = useContext(UserContext);
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
            <>
            <NavBarUser>
            <img alt={`${user.username} avatar`} src={user.avatar_url} />
            </NavBarUser>
            <NavBtnLink to="/login">
              <button className="logout" onClick={handleClick}>
                Log Out
              </button>
            </NavBtnLink>
            </>)}
          {!isLoggedIn ? (
            <NavBtnLink to="/register">
              <button className="register">Register</button>
            </NavBtnLink>
          ) : null}
        </NavBarBtn>
      </Nav>
    </>
  );
};

export default NavBar;
