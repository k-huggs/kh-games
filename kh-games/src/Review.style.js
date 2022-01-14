import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p.body {
    margin-left: 2rem;
    margin-right: 1rem;
    padding-right: 1rem;
  }

  h2 {
    margin-top: 3rem;
  }

  img {
    height: 50%;
    width: 50%;
    padding: 10px;
    margin-right: 1rem;
  }
`;

export const ReviewVotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;

  .dislike:hover {
    background: var(--red);
    color: var(--white);
  }

  .like:hover {
    background: var(--green);
    color: var(--white);
  }
`;
