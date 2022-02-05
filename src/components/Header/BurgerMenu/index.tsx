import { useOutsideClick } from 'boxis-uikit';
import React, { useRef } from 'react';

import Navigation from '../../Navigation';
import { Wrapper } from './styles';

type Props = {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
};

const BurgerMenu: React.FC<Props> = ({ isShow, setIsShow }) => {
  const burgerMenuRef = useRef(null);

  const onCloseBurgerMenu = () => {
    setIsShow(false);
  };

  useOutsideClick(burgerMenuRef, onCloseBurgerMenu);

  return (
    <Wrapper isShow={isShow} ref={burgerMenuRef}>
      <Navigation />
    </Wrapper>
  );
};

export default BurgerMenu;
