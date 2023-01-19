import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
  AiOutlinePhone,
  AiOutlineMail,
} from 'react-icons/ai';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0 20px;
  min-height: 80px;
  border-top: 1px solid lightgray;
  background-color: var(--bgc-color);
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  .built-by,
  .contact {
    width: 280px;
  }
  .built-by {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    opacity: 0.5;
    font-size: 0.9rem;
    height: 20px;
    cursor: pointer;
    button {
      border: none;
      background-color: transparent;
      color: black;
    }
    .author {
      display: none;
      transition: opacity ease-in 0.3s 1s;
      visibility: hidden;
      a {
        margin-left: 5px;
        top: 10px;
        svg {
          color: black;
          width: 0.8rem;
          height: 0.8rem;
          left: 0px;
          top: 1px;
          position: relative;
          &:hover {
            color: var(--main-color);
          }
        }
      }
      &.visible {
        visibility: visible;
        position: relative;
        display: inline;
      }
    }
  }
  .copy {
    padding: 10px;
  }
  .contact {
    display: flex;
    justify-content: center;
    svg {
      color: black;
      margin: 10px;
      width: 1.5rem;
      height: 1.5rem;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: var(--main-color);
      }
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    padding: 0 60px;
    .contact {
      justify-content: flex-end;
    }
    .built-by {
      justify-content: flex-start;
    }
  }
`;

const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledFooter>
      <div className='built-by'>
        <button
          type='button'
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          built by B.
        </button>
        <div className='links'>
          <p className={isActive ? 'author visible' : 'author'}>
            <a href='tel:+48 515 586 867' aria-label='numer telefonu'>
              <AiOutlinePhone />
            </a>
            <a href='mailto:bartekzarzyk@gmail.com' aria-label='adres email'>
              <AiOutlineMail />
            </a>
          </p>
        </div>
      </div>
      <p className='copy'>
        Copyright &#169; {'  '}
        <strong>Gitarady</strong>
        {` ${new Date().getFullYear()}`}
      </p>
      <div className='contact'>
        <a href='tel:+48 512 135 077' aria-label='numer telefonu'>
          <AiOutlinePhone />
        </a>
        <a href='mailto:gitarady@gmail.com' aria-label='adres email'>
          <AiOutlineMail />
        </a>
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
      </div>
    </StyledFooter>
  );
};

export default Footer;
