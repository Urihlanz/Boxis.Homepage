import { Button, Input, Modal, ModalProps, ValidationRule } from 'boxis-uikit';
import React from 'react';

import {
  FormInput,
  InputWrapper,
  LoginForm,
  PasswordRecovery,
  Title,
} from './styles';

const LoginModal: React.FC<ModalProps> = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <LoginForm
        onSubmit={({ values, formData }) => console.log(values, formData)}
      >
        <Title>Войти</Title>
        <InputWrapper>
          <FormInput
            component={Input}
            border
            type='email'
            size='lg'
            name='email'
            placeholder='Введите Email'
            validation={[
              {
                rule: ValidationRule.Required,
                message: 'Заполните обязательное поле!',
              },
              {
                rule: ValidationRule.RegExp,
                message: 'Некорректный email',
                value: /^\S+@\S+\.\S+$/,
              },
            ]}
          />
          <FormInput
            component={Input}
            border
            type='password'
            size='lg'
            name='password'
            placeholder='Введите пароль'
            validation={[
              {
                rule: ValidationRule.Required,
                message: 'Заполните обязательное поле!',
              },
              {
                rule: ValidationRule.MaxLength,
                value: 18,
                message: 'Длина не может быть больше 18 символов!',
              },
              {
                rule: ValidationRule.MinLength,
                value: 6,
                message: 'Длина не может быть меньше 6 символов!',
              },
            ]}
          />
        </InputWrapper>
        <PasswordRecovery href='#'>Забыли пароль?</PasswordRecovery>
        <Button size='lg' type='submit'>
          Войти
        </Button>
      </LoginForm>
    </Modal>
  );
};

export default LoginModal;
