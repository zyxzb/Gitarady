import React from 'react';
import Table from '../components/atoms/Table';
import SubpageHeadLayout from '../components/molecules/SubpageHeadLayout';

const subtitle = `Indywidualne lekcje instrumentu są najprzyjemniejszą, najszybszą i
najbardziej skuteczną formą nauki gry na gitarze. Dzięki
indywidualnemu podejściu do lekcji szybko osiągniesz zamierzone cele
muzyczne`;

const Cennik = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Cennik' subtitle={subtitle} />
      <Table />
    </div>
  );
};

export default Cennik;

export const Head = () => (
  <>
    <title>Gitarady - Cennik</title>;
    <meta name='description' content={subtitle}></meta>
  </>
);
