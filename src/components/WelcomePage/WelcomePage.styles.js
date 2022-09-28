import styled from "styled-components";

export const WelcWrapper = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1300px;
  position: relative;
  z-index: 1;
`;

export const WelcBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const Content = styled.div`
  z-index: 3;
  max-width: var(--maxWidth);
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  background: transparent;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

// export const styled

export const ButtonWrapper = styled.div`
  background: transparent;
  font-size: 20px;

  button.home:hover {
    background: var(--green);
    border: var(--pink);
  }

  button.logout:hover {
    background: var(--pink);
    border: var(--purple);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonHome = styled.button`
background: transparent;
`