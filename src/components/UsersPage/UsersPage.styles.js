import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const UserContainer = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in-out;
  margin: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  

  :hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const UserImgWrapper = styled.div`
  img {
    overflow: hidden;
    height: 400px;
    width: 400px;
  }

`;

export const CardTitle = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;

  h2 {
    margin: 0;
    padding: 0;
  }
`;

export const CardBody = styled.div``;
