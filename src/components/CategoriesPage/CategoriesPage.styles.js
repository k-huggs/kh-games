import styled from "styled-components";

export const CatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a {
    text-decoration: none;
  }
`;

export const CatCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--blue);
  width: 500px;
  height: 200px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in-out;
  margin: 30px;
  border-radius: 20px;

  :hover {
    box-shadow: 6px 8px 6px 8px;
  }

  h2 {
    background: transparent;
  }

  p {
    margin-left: 30px;
    background: transparent;
  }
`;
