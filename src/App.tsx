import './styles/globals.scss';

import React, { Fragment } from 'react';

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

const App: React.FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default App;
