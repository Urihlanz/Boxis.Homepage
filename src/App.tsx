import './styles/globals.scss';

import React from 'react';

import {
  Examples,
  Features,
  Footer,
  Greeting,
  Header,
  Reviews,
  Tariffs,
  TotalCreated,
  Video,
} from './components';
import { Main } from './components/styles';
import { LocaleProvider } from './context/Locale';

const App: React.FC = () => {
  return (
    <LocaleProvider>
      <Header />
      <Main>
        <Greeting />
        <Features />
        <Tariffs />
        <TotalCreated />
        <Examples />
        <Video />
        <Reviews />
      </Main>
      <Footer />
    </LocaleProvider>
  );
};

export default App;
