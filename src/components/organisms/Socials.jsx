import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Wrapper = styled.div`
  position: fixed;
  top: 40vh;
  right: 0;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  z-index: 99;
  a {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      width: 70%;
      height: 70%;
      color: var(--bgc-color);
      transition: color ease-in-out 0.3s;
    }
    &:hover {
      svg {
        color: black;
      }
    }
  }
  @media (min-width: 992px) {
    /* top: calc(80px + 8vh); */
    a {
      width: 50px;
      height: 50px;
    }
  }
`;

const Socials = () => {
  return (
    <Wrapper>
      <a
        href='https://www.instagram.com/gitarady_lekcjegitary/'
        target='_blank'
        aria-label='konto na instagramie'
        rel='noopener noreferrer'
      >
        <AiOutlineInstagram />
      </a>
      <a
        href='https://www.facebook.com/GitaradyLekcjeGitary'
        target='_blank'
        aria-label='konto na facebooku'
        rel='noopener noreferrer'
      >
        <AiFillFacebook />
      </a>
      <a
        href='https://www.youtube.com/@lekcjegitary_gitarady'
        target='_blank'
        aria-label='kanał na youtube'
        rel='noopener noreferrer'
      >
        <AiOutlineYoutube />
      </a>
    </Wrapper>
  );
};

export default Socials;
