import { useOutsideClick } from 'boxis-uikit';
import React, { useRef } from 'react';

import Navigation from '../../Navigation';
import { Wrapper } from './styles';

type Props = {
  isShow: boolean;
  isShowHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: React.FC<Props> = ({ isShow, isShowHandler }) => {
  const burgerMenuRef = useRef(null);

  const onCloseBurgerMenu = () => {
    isShowHandler(false);
  };

  useOutsideClick(burgerMenuRef, onCloseBurgerMenu);

  return (
    <Wrapper isShow={isShow} ref={burgerMenuRef}>
      <Navigation />
    </Wrapper>
  );
};

export default BurgerMenu;
