import { Form, FormItem } from 'boxis-uikit';
import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 33px;
  font-size: 24px;
`;

export const LoginForm = styled(Form)`
  width: 100%;
`;

export const FormInput = styled(FormItem)`
  width: 100%;
  margin-bottom: 24px;
`;

export const PasswordRecovery = styled.a`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  color: #1e1e1e;
  margin-bottom: 32px;
  text-align: end;
  width: 100%;
  margin-top: -11px;
`;
