import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ReviewContainer = styled.div`
h1 {
    text-align: center;
  }`;

export const ReviewContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const ReviewSort = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewButtonsSection = styled.section`
display: flex;
margin: 30px;
#next:hover {
    background: var(--green);
    transform: scale(1.10);
    box-shadow: 0px 0px 15px 0px;
  }

  #previous {
    margin-right: 20px;
  }
  
  #next {
    margin-left: 20px;
  }

  #previous:hover{
    background: var(--red);
    transform: scale(1.10);
    box-shadow: 0px 0px 15px 0px;
  }

  .disable {
      background: grey;
  }
`
