import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }

 

  button:hover {
    background: var(--green);
    transform: scale(1.03);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const GridContent = styled.div`
  display: flex;
  width: 350px;
  height: 800px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in-out;
  margin: 30px;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding: 24px;
  text-align: center;
  border-radius: 15px;
  :hover {
    background: var(--green);
    transform: scale(1.03);
    box-shadow: 0px 0px 15px 0px;
  }

  img {
    height: 400px;
    width: 400px;
  }

  p {
    background: transparent;
  }

  h3 {
    background: transparent;
    min-height: 44px;
  }
`;
