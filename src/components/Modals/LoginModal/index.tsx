import { FormSubmitArguments, Modal, ValidationRule } from 'boxis-uikit';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  FormInput,
  InputWrapper,
  LoginButton,
  LoginForm,
  PasswordRecovery,
  SwitchToRegistration,
  SwitchToRegistrationButton,
  SwitchToRegistrationText,
  Title,
} from './styles';

type Props = {
  onSwitch: () => void;
  isShow: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ isShow, onClose, onSwitch }) => {
  const intl = useIntl();
  const switchModal = () => {
    onClose();
    onSwitch();
  };

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <LoginForm
        onSubmit={({ values, formData }: FormSubmitArguments) =>
          console.log(values, formData)
        }
      >
        <Title>
          <FormattedMessage id='login_modal.title' />
        </Title>
        <InputWrapper>
          <FormInput
            border
            type='email'
            size='lg'
            name='email'
            placeholder={intl.formatMessage({
              id: 'login_modal.email_input.placeholder',
            })}
            validation={[
              {
                rule: ValidationRule.Required,
                message: intl.formatMessage({
                  id: 'validation.fill_required',
                }),
              },
              {
                rule: ValidationRule.RegExp,
                message: intl.formatMessage({
                  id: 'validation.wrong_email',
                }),
                value: /^\S+@\S+\.\S+$/,
              },
            ]}
          />
          <FormInput
            border
            type='password'
            size='lg'
            name='password'
            placeholder={intl.formatMessage({
              id: 'login_modal.password_input.placeholder',
            })}
            validation={[
              {
                rule: ValidationRule.Required,
                message: intl.formatMessage({
                  id: 'validation.fill_required',
                }),
              },
              {
                rule: ValidationRule.MaxLength,
                value: 18,
                message: intl.formatMessage(
                  {
                    id: 'validation.max_length',
                  },
                  {
                    count: '18',
                  }
                ),
              },
              {
                rule: ValidationRule.MinLength,
                value: 6,
                message: intl.formatMessage(
                  {
                    id: 'validation.min_length',
                  },
                  {
                    count: '6',
                  }
                ),
              },
            ]}
          />
        </InputWrapper>
        <PasswordRecovery>
          <FormattedMessage id='login_modal.password_recovery' />
        </PasswordRecovery>
        <LoginButton size='lg' type='submit'>
          <FormattedMessage id='login_modal.submit_button' />
        </LoginButton>
        <SwitchToRegistration>
          <SwitchToRegistrationText>
            <FormattedMessage id='login_modal.switch_to_registration.text' />
          </SwitchToRegistrationText>
          <SwitchToRegistrationButton onClick={switchModal}>
            <FormattedMessage id='login_modal.switch_to_registration.button' />
          </SwitchToRegistrationButton>
        </SwitchToRegistration>
      </LoginForm>
    </Modal>
  );
};

export default LoginModal;
