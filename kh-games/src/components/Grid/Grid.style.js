import styled from "styled-components";

export const GridWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h3 {
    color: black;
  }

  h3 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 20px 20px;
  margin: 20px 20px;

  img {
    width: 100px;
    height: auto;
  }

  :hover {
    box-shadow: 6px 8px 6px 8px;
  }
`;
