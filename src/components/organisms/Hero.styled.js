import styled from 'styled-components';

export const Wrapper = styled.div `
  padding: 3rem 0 0;
  background-color: #f4f4f4;
  .banner {
    position: relative;
    margin: 0 auto;
    display: grid;
    overflow: hidden;
    gap: 2.5rem;
    &::before,
    &::after {
      position: absolute;
      content: '';
      clip-path: polygon(
        0% 0%,
        0% 100%,
        4% 100%,
        4% 4%,
        100% 4%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 0%
      );
      background-color: var(--main-color);
      width: 50px;
      height: 50px;
    }
    &::after {
      left: 5vw;
      top: 5rem;
    }
    &::before {
      right: 5vw;
      bottom: 5rem;
      transform: rotate(180deg);
    }
    .img-banner {
      position: relative;
      user-select: none;
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(244, 244, 244, 0),
          rgba(244, 244, 244, 1)
        );
        width: 100%;
        height: 35%;
      }
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }
  .text {
    font-size: 1.5rem;
    padding: 0 0 2rem 0;
    strong {
      font-size: 4rem;
      position: relative;
      z-index: 2;
      span{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 35%;
        background-color: var(--main-color);
        z-index: -1;
      }
    }
  }
  p {
    padding: 0 1.5rem 1rem 0;
    &:nth-of-type(3) {
      padding: 0 1.5rem 2rem 0;
    }
  }
  @media (min-width: 576px) {
    padding: 5rem 0 3rem;
    .banner {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      &::before,
      &::after {
        width: 70px;
        height: 70px;
      }
    }
    .text {
      font-size: 2rem;
      strong {
        font-size: 5rem;
      }
    }
    p {
      padding: 0 5rem 2rem 0;
      &:nth-of-type(3) {
        padding: 0 5rem 2rem 0;
      }
    }
  }
`;