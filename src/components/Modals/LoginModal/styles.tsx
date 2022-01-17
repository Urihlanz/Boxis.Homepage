import { Button, Form, Input } from 'boxis-uikit';
import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 33px;
  font-size: 24px;
`;

export const LoginForm = styled(Form)`
  width: 100%;
`;

export const FormInput = styled(Input)`
  width: 100%;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PasswordRecovery = styled.button`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  color: #1e1e1e;
  margin-bottom: 32px;
  text-align: right;
  width: 100%;
  background: none;
`;

export const InputWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 11px;
`;

export const SwitchToRegistration = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;

  @media (max-width: 385px) {
    flex-direction: column;
  }
`;

export const SwitchToRegistrationText = styled.p`
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

export const SwitchToRegistrationButton = styled.button`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  text-decoration: underline;
  font-weight: 400;
  cursor: pointer;
  background: none;
`;

export const LoginButton = styled(Button)`
  margin-bottom: 26px;
`;
