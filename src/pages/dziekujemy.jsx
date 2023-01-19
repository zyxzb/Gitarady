import { Link } from 'gatsby';
import React from 'react';
import SubpageHeadLayout from '../components/molecules/SubpageHeadLayout';

const subtitle = `Dziękujemy za kontakt! Odpiszemy na Twoją wiadomość tak szybko jak to możliwe 🙂`;

const Dziekujemy = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Poszło! ✉' subtitle={subtitle} />
      <Link
        to='/'
        className='btn'
        style={{
          margin: '0 auto',
          fontSize: '14px',
        }}
      >
        Strona Główna
      </Link>
    </div>
  );
};

export default Dziekujemy;

export const Head = () => (
  <>
    <title>Gitarady - Dziękujemy za Kontakt!</title>;
    <meta name='description' content={subtitle}></meta>
  </>
);
