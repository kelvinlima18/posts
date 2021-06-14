import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/segware_logo.png';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} alt="Segware" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Recuperar senha</h2>

          <Input name="username" placeholder="Usuário" />

          <Button type="submit" className="sign-in">
            Recuperar
          </Button>
        </Form>

        <span className="password" />
      </Content>
    </Container>
  );
};

export default ForgotPassword;
