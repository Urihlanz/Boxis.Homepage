import React, { useState } from 'react';

import Navigation from '../Navigation';
import BurgerMenu from './BurgerMenu';
import {
  BurgerMenuIcon,
  ButtonsRow,
  Container,
  LoginButton,
  RegistrationButton,
  StyledLogo,
  Wrapper,
} from './styles';

const Header: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <Wrapper>
      <Container>
        <StyledLogo width={127} height={35} />
        <Navigation hasBurgerMenu={false} />
        <ButtonsRow>
          <RegistrationButton>Регистрация</RegistrationButton>
          <LoginButton>Вход</LoginButton>
          <BurgerMenuIcon width={24} height={24} onClick={handleClick} />
        </ButtonsRow>
      </Container>
      <BurgerMenu isShow={isShow} />
    </Wrapper>
  );
};

export default Header;
