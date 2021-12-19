import { NextPage } from 'next';
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
} from '../components/Home';
import { Main } from '../components/Home/styles';

const Home: NextPage = () => {
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

export default Home;
