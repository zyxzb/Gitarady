import React, { useRef } from 'react';
import { navigate } from 'gatsby';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  position: relative;
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
    left: 0;
    top: 0;
  }
  &::before {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }
  input,
  textarea {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding: 10px;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
  }
  textarea {
    width: 100%;
    height: 180px;
  }
  button {
    position: relative;
    bottom: -30px;
  }
  @media (min-width: 576px) {
    padding: 30px;
  }
  button {
    bottom: -20px;
  }
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        `${process.env.GATSBY_SERVICE_ID}`,
        `${process.env.GATSBY_TEMPLATE_ID}`,
        form.current,
        `${process.env.GSTSBY_PUBLIC_KEY}`
      );
      console.log(result.text);
      navigate('/dziekujemy');
    } catch (err) {
      console.log(err);
      alert(
        `Coś poszło nie tak :( \n Błąd: ${err.text} \n Spróbuj jeszcze raz!`
      );
    }
  };

  return (
    <Wrapper ref={form} onSubmit={sendEmail}>
      <div>
        <label>
          Imię:
          <input type='text' name='user_name' placeholder='Imię...' required />
        </label>
        <label>
          Twój email:
          <input type='email' name='user_email' placeholder='@' required />
        </label>
      </div>
      <label>
        Wiadomość:
        <textarea name='message' placeholder='Twoja wiadomość...' required />
      </label>
      <button type='submit' value='Wyślij' className='btn'>
        Wyślij
      </button>
    </Wrapper>
  );
};

export default ContactForm;
