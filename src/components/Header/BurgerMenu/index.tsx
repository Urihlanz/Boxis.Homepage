import React from 'react';

import Navigation from '../../Navigation';
import { LanguageSelectMenu, Wrapper } from './styles';

type Props = {
  isShow: boolean;
};

const BurgerMenu: React.FC<Props> = ({ isShow }) => (
  <Wrapper isShow={isShow}>
    <LanguageSelectMenu />
    <Navigation />
  </Wrapper>
);

export default BurgerMenu;
