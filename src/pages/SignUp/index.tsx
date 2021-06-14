import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import logo from '../../assets/segware_logo.png';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('sign-up', data);

        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );
  return (
    <Container>
      <Content>
        <img src={logo} alt="Segware" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça o seu cadastro</h2>

          <Input name="username" placeholder="Usuário" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit" className="sign-in">
            Cadastrar
          </Button>
        </Form>

        <Link to="/">Já tem uma conta? Faça o login aqui!</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
