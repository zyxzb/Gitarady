import React from 'react';
import SubpageHeadLayout from '../components/molecules/SubpageHeadLayout';
import ContactForm from '../components/organisms/ContactForm';
import Map from '../components/atoms/Map';
import styled from 'styled-components';
import ContactData from '../components/atoms/ContactData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3em;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const subtitle = `Zapraszamy do kontaktu bezpośredniegu lub poprzez poniższy formularz.`;

const Kontakt = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Kontakt' subtitle={subtitle} />
      <ContactData />
      <Wrapper>
        <ContactForm />
        <Map />
      </Wrapper>
    </div>
  );
};

export default Kontakt;

export const Head = () => (
  <>
    <title>Gitarady - Kontakt</title>;
    <meta name='description' content={subtitle}></meta>
  </>
);
