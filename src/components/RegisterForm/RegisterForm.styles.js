import styled from "styled-components";

export const RegWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  padding: 0 20px;
`;

export const RegForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input.text {
    padding: 6px 10px;
    margin: 30px 20px;
    display: block;
    width: 40vh;
  }

  button:hover {
    background: var(--green);
    color: var(--white);
  }
`;
