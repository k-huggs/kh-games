import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 40px;
    color: blue;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    padding: 6px 10px;
    margin: 30px 20px;
    display: block;
    width: 40vh;
  }

  input.box {
    color: black;
  }

  .button {
    border-color: var(--orange);
    padding: 5px 5px;
    margin-top: 20px 20px;
    width: 30vh;
  }
  .button:hover {
    border-color: var(--green);
    box-shadow: 4px 4px var(--green);
  }
`;
