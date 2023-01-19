import styled from 'styled-components';

export const Wrapper = styled.div `
  h1,
  h2,
  h3 {
    text-align: center;
    padding: 2rem 0;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  p,span{
    font-size: 0.9rem;
  }
  .back-date {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
  .date {
    margin-top: auto;
    font-size: 0.7rem;
  }
  p {
    line-height: 24px;
    font-size: 0.9rem;
    text-align: justify;
    &::first-letter {
      font-size: 5rem;
      color: var(--main-color);
      font-family: 'Black Ops One';
      margin: 1.5rem 1rem 1rem 0;
      float: left;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: max-content;
    .image-wrapper {
      width: 100%;
      .gatsby-image-wrapper {
        max-height: 100%;
        aspect-ratio: 16/10;
      }
    }
    .text-wrapper {
      width: 100%;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }
    .center {
      flex-direction: row;
    }
    p, span {
      font-size: 1rem;
  }
  }
`;