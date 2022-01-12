import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const NotFoundH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;
  border-bottom: 2px solid black;
  padding: 30px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const NotFoundVid = styled.video`
  width: 80%;
  height: 80%;
  -o-object-fit: cover;
`;

export const NotFoundContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotFoundH3 = styled.h3``;

export const NotFoundText = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NotFoundBtn = styled.div`
  margin-right: 10px;
  font-size: 20px;
  position: relative;
  button {
    padding: 20px 20px;
    background: blue;
    border-radius: 20px;
    font-weight: 400;
  }

  button:hover {
    background: green;
    box-shadow: 8px 6px 8px 6px;
  }
`;
