import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NotFoundH1 = styled.h1`
  color: black;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
`;

export const NotFoundVid = styled.video`
  width: 30%;
  height: 30%;
`;

export const VidWrapper = styled.div`
  padding: 2rem;
  background: white;
  width: 100%;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: white;
`;

export const NotFoundBtn = styled.div`
  font-size: 20px;
  margin-top: 3rem;
  button:hover {
    background: var(--green);
  }
`;
