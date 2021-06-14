import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/segware_logo.png';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          username: data.username,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Segware" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça o seu login</h2>

          <Input name="username" placeholder="Usuário" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit" className="sign-in">
            Entrar
          </Button>

          <Link to="/forgot-password">Esqueci minha senha</Link>
        </Form>

        <Link to="/register">Ainda não tem uma conta? Cadastre-se!</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
