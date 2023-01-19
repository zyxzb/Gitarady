import React from 'react';
import styled from 'styled-components';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      margin: 10px auto;
      a {
        color: var(--main-color);
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        svg {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
  @media (min-width: 576px) {
    ul {
      flex-direction: row;
      li {
        margin: 1rem;
        a {
          font-size: 1.3rem;
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;

const ContactData = () => {
  return (
    <Wrapper className='contact'>
      <ul>
        <li>
          <a href='tel:+48 512 135 077' aria-label='telefon komórkowy'>
            <AiOutlinePhone />
            <span>512 135 077</span>
          </a>
        </li>
        <li>
          <a href='mailto:gitarady@gmail.com' aria-label='adres e-mail'>
            <AiOutlineMail />
            <span>gitarady@gmail.com</span>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default ContactData;
