import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const LoginContainer = styled.form`
  display: flex;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 30px;
    color: blue;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    padding: 6px 10px;
    margin: 10px 20px;
    border: 1px solid #ddd;
    display: block;
    box-sizing: border-box;
  }

  .button {
    border-color: var(--orange);
    padding: 5px 5px;
    margin-top: 20px 20px;
  }
  .button:hover {
    border-color: var(--green);
    box-shadow: 4px 4px var(--green);
  }
`;

//   button {
//     cursor: pointer;
//     border-radius: 8px;
//     margin-top: 30px;
//     padding: 20px 20px;

//     :hover {
//         background: green;
//   }
