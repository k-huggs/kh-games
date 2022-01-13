import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  position: sticky;
  width: 100%;
  top: 0;

  h2 {
    margin-left: 25px;
  }
`;

export const HomeBtn = styled.div``;

export const NavBarContent = styled.div`
  display: flex;

  span {
    margin-left: 50px;
    margin-right: 50px;
  }

  .categories {
    cursor: pointer;
  }

  .reviews {
    cursor: pointer;
  }

  .users {
    cursor: pointer;
  }
`;

export const NavBarBtn = styled.div`
  button:hover {
    cursor: pointer;
  }

  .login:hover {
    background: var(--green);
    cursor: pointer;
  }
  .logout:hover {
    background: var(--red);
    cursor: pointer;
  }
  .register:hover {
    background: var(--purple);
  }
`;
