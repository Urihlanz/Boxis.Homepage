import { Modal, ValidationRule } from 'boxis-uikit';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  Disclaimer,
  FormInput,
  InputWrapper,
  RegistrationButton,
  RegistrationForm,
  SwitchToLogin,
  SwitchToLoginButton,
  SwitchToLoginText,
  Title,
} from './styles';

type Props = {
  onSwitch: () => void;
  isShow: boolean;
  onClose: () => void;
};

const RegistrationModal: React.FC<Props> = ({ isShow, onClose, onSwitch }) => {
  const intl = useIntl();
  const switchModal = () => {
    onClose();
    onSwitch();
  };

  return (
    <Modal onClose={onClose} isShow={isShow}>
      <RegistrationForm
        onSubmit={({ values, formData }) => console.log(values, formData)}
      >
        <Title>
          <FormattedMessage id='registration_modal.title' />
        </Title>
        <InputWrapper>
          <FormInput
            border
            type='email'
            size='lg'
            name='email'
            placeholder={intl.formatMessage({
              id: 'registration_modal.email_input.placeholder',
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
              id: 'registration_modal.password_input.placeholder',
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
        <Disclaimer>
          <FormattedMessage id='registration_modal.disclaimer' />
        </Disclaimer>
        <RegistrationButton size='lg' type='submit'>
          <FormattedMessage id='registration_modal.registration_button' />
        </RegistrationButton>
        <SwitchToLogin>
          <SwitchToLoginText>
            <FormattedMessage id='registration_modal.switch_to_login.text' />
          </SwitchToLoginText>
          <SwitchToLoginButton onClick={switchModal}>
            <FormattedMessage id='registration_modal.switch_to_login.button' />
          </SwitchToLoginButton>
        </SwitchToLogin>
      </RegistrationForm>
    </Modal>
  );
};

export default RegistrationModal;
