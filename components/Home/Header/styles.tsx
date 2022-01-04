import { Button } from 'boxis-uikit';
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

export const RegistrationButton = styled.button`
  background: none;
  font-size: 16px;
  margin-right: 36px;
  cursor: pointer;

  @media (max-width: 930px) {
    margin-right: 11px;
    font-size: 12px;
  }
`;

export const LoginButton = styled(Button)`
  font-size: 16px;

  @media (max-width: 930px) {
    padding: 0 16px;
    height: 26px;
    margin-right: 14px;
    font-size: 12px;
  }
`;
