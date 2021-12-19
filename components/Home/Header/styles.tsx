import styled from 'styled-components';

import Logo from '../Logo';
import { Container as MainContainer } from '../styles';
import BurgerIcon from './BurgerIcon';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  height: 100px;
  width: 100%;
  border-bottom: 2px rgba(0, 0, 0, 0.1) solid;
  z-index: 1000;

  @media (max-width: 930px) {
    height: 65px;
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-logo {
    @media (max-width: 930px) {
      width: 70px;
      height: 19px;
    }
  }
`;

export const StyledLogo = styled(Logo)`
  @media (max-width: 930px) {
    width: 70px;
    height: 19px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
`;

export const BurgerMenuIcon = styled(BurgerIcon)`
  display: none;

  @media (max-width: 930px) {
    display: inline-block;
  }
`;

export const AuthButton = styled.button`
  font-size: 16px;
  margin-right: 36px;
  cursor: pointer;

  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

export const RegistrationButton = styled(AuthButton)`
  background: none;

  @media (max-width: 930px) {
    margin-right: 11px;
  }
`;

export const LoginButton = styled(AuthButton)`
  height: 35px;
  border-radius: 8px;
  padding: 0 28px;
  margin-right: 0;
  color: #fff;
  background: rgb(163, 54, 109);
  background: linear-gradient(
    133deg,
    rgba(163, 54, 109, 1) 0%,
    rgba(244, 87, 111, 1) 65%
  );

  @media (max-width: 930px) {
    padding: 0 16px;
    height: 26px;
    margin-right: 14px;
  }
`;
