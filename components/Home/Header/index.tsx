import React, { useCallback, useState } from 'react';

import LoginModal from '../LoginModal';
import Navigation from '../Navigation';
import RegistrationModal from '../RegistrationModal';
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
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegistrationModal, setIsShowRegistrationModal] = useState(false);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  const onCloseLoginModal = useCallback(() => {
    setIsShowLoginModal(false);
  }, []);

  const onOpenLoginModal = useCallback(() => {
    setIsShowLoginModal(true);
  }, []);

  const onCloseRegistrationModal = useCallback(() => {
    setIsShowRegistrationModal(false);
  }, []);

  const onOpenRegistrationModal = useCallback(() => {
    setIsShowRegistrationModal(true);
  }, []);

  return (
    <Wrapper>
      <Container>
        <StyledLogo width={127} height={35} />
        <Navigation hasBurgerMenu={false} />
        <ButtonsRow>
          <RegistrationButton onClick={onOpenRegistrationModal}>
            Регистрация
          </RegistrationButton>
          <LoginButton size='sm' onClick={onOpenLoginModal}>
            Вход
          </LoginButton>
          <BurgerMenuIcon width={24} height={24} onClick={handleClick} />
        </ButtonsRow>
      </Container>
      <BurgerMenu isShow={isShow} />
      <LoginModal isShow={isShowLoginModal} onClose={onCloseLoginModal} />
      <RegistrationModal
        isShow={isShowRegistrationModal}
        onClose={onCloseRegistrationModal}
      />
    </Wrapper>
  );
};

export default Header;
