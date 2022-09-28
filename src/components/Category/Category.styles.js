import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  h1 {
    margin-top: 6vh;
    padding: 30px;
  }
`;

export const CategoryReviews = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0px 0px 10px -5px;
  transition: 0.3s;
  animation: ease-in-out;
  margin-top: 20px;
  border-radius: 20px;
  background: var(--pink);
  width: 40vh;

  :hover {
    box-shadow: 6px 8px 6px 8px;
  }

  h2 {
    background: transparent;
    margin-left: 4vh;
  }

  h3 {
    background: transparent;
    margin-left: 4vh;
  }

  p {
    background: transparent;
  }
`;
