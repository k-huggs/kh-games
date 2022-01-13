import styled from "styled-components";

export const RegWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const RegForm = styled.form`
  border: solid;
  padding: 1rem 2rem 2rem 2rem;
  border-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const RegContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  input.text {
    width: 300px;
    margin: 3rem;
    padding: 1rem;
  }

  button:hover {
    background: var(--green);
  }
`;
