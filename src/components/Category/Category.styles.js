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

export const CategoryCardsContainer = styled.main`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
`


export const CategoryReviews = styled.div`
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

  h2 {
    background: transparent;
    min-height: 44px;
  }

  h3 {
    background: transparent;
  }
`;
