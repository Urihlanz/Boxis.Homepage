import { Button } from 'boxis-uikit';
import styled from 'styled-components';

import { overrideStyled } from '../../utils/styled';
import Logo from '../Logo';
import { Navbar } from '../Navigation/styles';
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
  z-index: 10;

  @media (max-width: 930px) {
    height: 65px;
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  }
`;

export const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Navbar} {
    @media (max-width: 930px) {
      display: none;
    }
  }

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
  align-items: center;
`;

export const BurgerMenuIcon = styled(BurgerIcon)`
  display: none;

  @media (max-width: 930px) {
    display: inline-block;
  }
`;

export const RegistrationButton = overrideStyled(Button)`
  font-size: 16px;

  &:hover {
    color: #1E1E1E;
  }

  @media (max-width: 930px) {
    margin-right: 11px;
    font-size: 12px;
    height: 26px;
    padding: 0;
  }
`;

export const LoginButton = overrideStyled(Button)`
  font-size: 16px;

  @media (max-width: 930px) {
    padding: 0 16px;
    height: 26px;
    margin-right: 14px;
    font-size: 12px;
  }
`;
