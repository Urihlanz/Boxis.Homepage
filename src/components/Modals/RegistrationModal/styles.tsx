import { Button, Form, Input } from 'boxis-uikit';
import styled from 'styled-components';

import { overrideStyled } from '../../../utils/styled';

export const Title = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 31px;
  font-size: 24px;
`;

export const RegistrationForm = styled(Form)`
  width: 100%;
`;

export const FormInput = styled(Input)`
  width: 100%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Disclaimer = styled.div`
  width: 100%;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #787878;
  margin-bottom: 24px;
  font-weight: 400;
`;

export const RegistrationButton = overrideStyled(Button)`
  margin-bottom: 24px;

  @media (max-width: 385px) {
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 22px;
`;

export const SwitchToLogin = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;

  @media (max-width: 385px) {
    flex-direction: column;
  }
`;

export const SwitchToLoginText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  text-align: center;
  color: #787878;
  font-weight: 400;
  margin-right: 3px;

  @media (max-width: 385px) {
    margin-bottom: 10px;
  }
`;

export const SwitchToLoginButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  text-decoration: underline;
  font-weight: 400;
  cursor: pointer;
  background: none;
`;
