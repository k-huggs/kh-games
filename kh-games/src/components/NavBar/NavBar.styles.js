import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: var(--orange);
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  z-index: 10;

  h2 {
    margin-left: 50px;
    background: var(--orange);
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  background: var(--orange);

  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--purple);
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: var(--fontMed);
    cursor: pointer;
  }
`;

export const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;
  justify-content: space-between;
  background: var(--orange);

  .categories {
    margin-right: 35px;
  }

  .reviews {
    margin-left: 35px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBarBtn = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;

  background: var(--orange);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--orange);
  padding: 10px 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  .register {
    margin-right: 20px;
  }

  .register:hover {
    transition: all 0.2 ease-in-out;
    color: #fff;
    background: var(--purple);
  }

  .login:hover {
    transition: all 0.2 ease-in-out;
    background: var(--green);
    color: #fff;
  }

  .logout:hover {
    transition: all 0.2 ease-in-out;
    background: var(--red);
    color: #fff;
  }
`;

// export const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 90px;
//   position: sticky;
//   width: 100%;
//   top: 0;

//   h2 {
//     margin-left: 25px;
//   }
// `;

// export const HomeBtn = styled.div``;

// export const NavBarContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   color: black;

//   span {
//     margin-left: 50px;
//     margin-right: 50px;
//   }

//   .categories {
//     cursor: pointer;
//   }

//   .reviews {
//     cursor: pointer;
//   }

//   .users {
//     cursor: pointer;
//   }
// `;

// export const NavBarBtn = styled.div`
//   button:hover {
//     cursor: pointer;
//   }

//   .login:hover {
//     background: var(--green);
//     cursor: pointer;
//   }
//   .logout:hover {
//     background: var(--red);
//     cursor: pointer;
//   }
//   .register:hover {
//     background: var(--purple);
//   }
// `;
