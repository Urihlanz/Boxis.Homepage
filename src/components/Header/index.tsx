import { useOutsideClick } from 'boxis-uikit';
import React, { useCallback, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import LoginModal from '../Modals/LoginModal';
import RegistrationModal from '../Modals/RegistrationModal';
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
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegistrationModal, setIsShowRegistrationModal] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsShowBurgerMenu(false);
  });

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
    <Wrapper ref={ref}>
      <Container>
        <StyledLogo width={127} height={35} />
        <Navigation />
        <ButtonsRow>
          <RegistrationButton
            onClick={onOpenRegistrationModal}
            borderless={true}
            outlined={true}
          >
            <FormattedMessage id='button.registration' />
          </RegistrationButton>
          <LoginButton size='sm' onClick={onOpenLoginModal}>
            <FormattedMessage id='button.login' />
          </LoginButton>
          <BurgerMenuIcon
            width={24}
            height={24}
            onClick={() => setIsShowBurgerMenu((prev) => !prev)}
          />
        </ButtonsRow>
      </Container>
      <BurgerMenu isShow={isShowBurgerMenu} />
      <LoginModal
        isShow={isShowLoginModal}
        onClose={onCloseLoginModal}
        onSwitch={onOpenRegistrationModal}
      />
      <RegistrationModal
        isShow={isShowRegistrationModal}
        onClose={onCloseRegistrationModal}
        onSwitch={onOpenLoginModal}
      />
    </Wrapper>
  );
};

export default Header;
