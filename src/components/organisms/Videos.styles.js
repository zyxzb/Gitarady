import styled from 'styled-components';
export const Wrapper = styled.div `
  background: var(--bgc-color);
  .title {
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    a {
      text-decoration: none;
      color: black;
      position: relative;
      h2 {
        font-size: 2rem;
        padding: 0 2rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -2rem;
        svg {
          color: var(--main-color);
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: transparent;
    position: relative;
    top: -2rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  .videos {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
  }
  @media (min-width: 576px) {
    background: linear-gradient(
      0deg,
      var(--main-color) 50%,
      var(--bgc-color) 50%
    );
    .title {
      a {
        h2 {
          font-size: 3rem;
          text-align: center;
          flex-direction: row;
          svg{
            margin-left: 15px;
          }
        }
      }
    }
    iframe {
      width: 100%;
      min-height: 320px;
      height: 100%;
    }
    .videos {
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    }
  }
`;