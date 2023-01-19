import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SubpageHeadLayout from '../components/molecules/SubpageHeadLayout';

const subtitle = `Jeżeli chcesz podrasować swój kawałek fajną gitarową partią lub chcesz, żebym naspisał dla Ciebie gotowy utwór - Z przyjemnością pomogę. Czuje się dobrze w wielu stylistykach muzycznych jak: Rock, Funk , Blues, Hard Rock, Lo Fi. Chętnie dowiem się więcej o Twoim projekcie. Dzwon lub pisz śmiało :)`;

const Nagrania = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Nagrania' subtitle={subtitle} />
      <StaticImage
        src='../images/music-recording.jpg'
        alt='nagrania'
        formats={['auto', 'avif', 'webp', 'jpeg']}
        style={{ maxHeight: '400px' }}
      />
    </div>
  );
};

export default Nagrania;

export const Head = () => (
  <>
    <title>Gitarady - Nagrania</title>;
    <meta name='description' content={subtitle}></meta>
  </>
);
