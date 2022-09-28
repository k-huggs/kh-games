import styled from "styled-components";

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CommentsContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p.body {
    margin-left: 25px;
    margin-right: 10px;
  }
`;

export const CommentsBtn = styled.div`
  .like:hover {
    background: var(--green);
    color: var(--white);
  }

  .dislike:hover {
    background: var(--red);
    color: var(--white);
  }
`;
