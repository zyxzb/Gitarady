import React from 'react';
import { Wrapper } from './Videos.styles';
import { BiLinkExternal } from 'react-icons/bi';

const Videos = () => {
  return (
    <Wrapper className='section'>
      <div className='title'>
        <a
          href='https://goo.gl/maps/qXDg5fkj1L3jCZW58'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='oceny w google'
        >
          <h2>
            ZOBACZ NASZE OCENY W GOOGLE
            <BiLinkExternal />
          </h2>
        </a>
      </div>
      <div className='videos section-center'>
        <iframe
          src='https://www.youtube.com/embed/7JvjzwH_Q6o'
          title='Shape of You by Ed Sheeran in 4 Steps'
          frameBorder='0'
          allowFullScreen
        ></iframe>
        <iframe
          src='https://www.youtube.com/embed/UJ9eGN6SHFM'
          title='Improwizacja Am'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default Videos;
