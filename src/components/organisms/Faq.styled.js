import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--main-color);
  ul {
    li {
      list-style-type: none;
    }
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
  }
  .card {
    display: block;
    cursor: pointer;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    transform: translateY(0);
    :hover {
      transform: translateY(-15px);
    }
    opacity: 0;
    &.appear {
      opacity: 1;
    }
    transition: transform 0.3s ease-in-out, opacity 0.6s ease-in;
  }
  .title {
    display: flex;
    justify-content: center;
    text-align: center;
    h2 {
      font-size: 2rem;
      padding: 0 2rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      position: relative;
      div {
        display: none;
        font-size: 6rem;
        position: absolute;
        right: -8rem;
        top: -62%;
        background-color: transparent;
        border: 3px solid var(--bgc-color);
        border-radius: 50%;
        border-right: 3px solid transparent;
        border-left: 3px solid transparent;
        width: 8rem;
        height: 8rem;
        animation-name: spin;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      span {
        display: none;
        font-size: 6rem;
        position: absolute;
        right: -6rem;
        top: -50%;
        z-index: 1;
        &.active {
          color: var(--bgc-color);
          transition: color 0.3s ease;
        }
      }
    }
  }
  .question {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    h3 {
      text-align: center;
      padding: 0 1rem;
    }
  }
  .main {
    padding: 1.5rem;
    p,
    li {
      position: relative;
      font-size: 1.1rem;
      line-height: 1.3rem;
      margin-bottom: 1rem;
      padding-left: 1rem;
      &::before {
        position: absolute;
        top: 50%;
        left: -8px;
        transform: translateY(-50%);
        content: '';
        clip-path: polygon(100% 50%, 0 0, 0 100%);
        background-color: var(--bgc-color);
        width: 12px;
        height: 12px;
      }
    }
  }
  .lesson-unit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      padding: 1rem;
      font-size: 1.4rem;
    }
    svg {
      color: var(--bgc-color);
      width: 3rem;
      height: 3rem;
    }
  }
  @media (min-width: 576px) {
    &.section {
      padding: 0 0 5rem;
    }
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
    .title {
      h2 {
        font-size: 3rem;
      }
    }
  }
  @media (min-width: 1200px) {
    .title {
      h2 {
        div {
          display: block;
        }
        span {
          display: block;
        }
      }
    }
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
