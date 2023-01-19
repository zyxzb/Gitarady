import * as React from 'react';
import SubpageHeadLayout from '../components/molecules/SubpageHeadLayout';
import { Link } from 'gatsby';

const subtitle = `Błąd, nie znaleziono strony :(`;
const NotFoundPage = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Błąd' subtitle={subtitle} />
      <Link to='/' className='btn' style={{ margin: '0 auto' }}>
        Wyjdź
      </Link>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
