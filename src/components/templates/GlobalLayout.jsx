import React from 'react';
import Footer from '../molecules/Footer';
import Socials from '../organisms/Socials';
import Navigation from '../molecules/Navigation';
import { GlobalStyle } from '../../styles/GlobalStyle';
import Sidebar from '../organisms/Sidebar';
import { GitaradyProvider } from '../../context/context';

const GlobalLayout = ({ children }) => {
  return (
    <GitaradyProvider>
      <GlobalStyle />
      <Navigation />
      <Socials />
      <Sidebar />
      <main className='content'>{children}</main>
      <Footer />
    </GitaradyProvider>
  );
};

export default GlobalLayout;
