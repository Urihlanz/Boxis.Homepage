import { Button, Form, FormItem, Modal } from 'boxis-uikit';
import styled from 'styled-components';

export const LoginModalWindow = styled(Modal)``;

export const Title = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 31px;
  font-size: 24px;
`;

export const RegistrationForm = styled(Form)`
  width: 100%;
`;

export const FormInput = styled(FormItem)`
  width: 100%;
  margin-bottom: 24px;
`;

export const Disclaimer = styled.div`
  width: 100%;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #787878;
  margin-bottom: 24px;
  margin-top: -2px;
  font-weight: 400;
`;

export const RegistrationButton = styled(Button)`
  @media (max-width: 385px) {
    padding: 0 20px;
  }
`;
