import { Input, Modal, ModalProps, ValidationRule } from 'boxis-uikit';
import React from 'react';

import {
  Disclaimer,
  FormInput,
  InputWrapper,
  RegistrationButton,
  RegistrationForm,
  Title,
} from './styles';

const RegistrationModal: React.FC<ModalProps> = ({ isShow, onClose }) => {
  return (
    <Modal onClose={onClose} isShow={isShow}>
      <RegistrationForm
        onSubmit={({ values, formData }) => console.log(values, formData)}
      >
        <Title>Регистрация</Title>
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
        <Disclaimer>
          Нажимая кнопку «Зарегистрироваться», Вы принимаете условия
          Пользовательского соглашения.
        </Disclaimer>
        <RegistrationButton size='lg' type='submit'>
          Зарегистрироваться
        </RegistrationButton>
      </RegistrationForm>
    </Modal>
  );
};

export default RegistrationModal;
