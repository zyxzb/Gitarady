import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <Link to='/'>
      <StaticImage
        src='../../images/logo.png'
        alt='logo'
        width={80}
        height={80}
        className='logo-img'
        placeholder='transparent'
      />
    </Link>
  );
};

export default Logo;
