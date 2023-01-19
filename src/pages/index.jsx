import * as React from 'react';
import Hero from '../components/organisms/Hero';
import Faq from '../components/organisms/Faq';
import Videos from '../components/organisms/Videos';
import TextContent from '../components/organisms/TextContent';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <TextContent />
      <Videos />
      <Faq />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>
      Gitarady - Nauka Gry na Gitarze i Ukulele 🎸 Warszawa | Online
    </title>
    <meta
      name='description'
      content='Nauka gry na: Gitarze akustycznej, elektrycznej i ukulele ⭐ Lekcje odbywają się stacjonarnie w Warszawie 🏠 lub Online w całej Polsce | Gwarancja zadowolenia ✔️'
    ></meta>
    <meta
      name='keywords'
      content='lekcje gitary,nauka gry na gitarze, nauczyciel gitary, lekcje ukulele ,nauka gry na ukulele, nauczyciel ukulele'
    ></meta>
  </>
);
