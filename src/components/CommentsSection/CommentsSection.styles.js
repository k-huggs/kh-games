import styled from "styled-components";

export const CommentsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    height: 15rem;
    width: 30rem;
  }
`;
export const CommentButton = styled.button`
  width: 100px;

  :hover {
    background: var(--blue);
  }
`;

export const FormContent = styled.div``;
