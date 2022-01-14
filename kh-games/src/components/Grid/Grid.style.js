import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const GridContent = styled.div`
  width: 350px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in-out;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    background: var(--green);
  }

  img {
    height: 400px;
    width: 400px;
  }
  img:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }

  p {
    background: transparent;
  }

  h3 {
    background: transparent;
  }
`;

// display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   grid-gap: 2rem;
//   padding: 20px 20px;
//   margin: 20px 20px;

//   img {
//     width: 100px;
//     height: auto;
//   }

// img {
//   width: 100px;
//   height: 100px;
// }

// img:hover {
//   box-shadow: 6px 8px 6px 8px;
//   transform: scale(1.1);
//   box-shadow: 0px 0px 15px 0px;
// }
