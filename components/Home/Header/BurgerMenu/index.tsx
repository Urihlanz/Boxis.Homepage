import React from 'react';

import Navigation from '../../Navigation';
import { Wrapper } from './styles';

type Props = {
  isShow: boolean;
};

const BurgerMenu: React.FC<Props> = ({ isShow }) => (
  <Wrapper isShow={isShow}>
    <Navigation stackedMenu={true} />
  </Wrapper>
);

export default BurgerMenu;
