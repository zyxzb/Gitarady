import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1,
  h2 {
    text-align: center;
    padding: 2rem 0;
    font-size: 1.1rem;
  }
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    strong {
      z-index: 2;
      position: relative;
    }
    span {
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
  @media (min-width: 576px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const SubpageHeadLayout = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <h1>
        <strong>
          {title}
          <span />
        </strong>
      </h1>
      <h2>{subtitle}</h2>
    </Wrapper>
  );
};

export default SubpageHeadLayout;
