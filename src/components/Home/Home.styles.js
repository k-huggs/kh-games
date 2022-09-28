import styled from "styled-components";

export const HomeWrapper = styled.div`
  z-index: 1;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
`;

export const HeroBg = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const HeroVid = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HomeContent = styled.div`
  z-index: 3;
  background: transparent;
  p {
    color: white;
    background: transparent;
  }

  h1 {
    background: transparent;
    color: var(--white);
  }
`;
