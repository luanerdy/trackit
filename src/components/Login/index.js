import React from 'react';
import Input from '../general/Input';
import Button from '../general/Button';
import Container from '../general/Container';
import Logo from '../general/Logo';
import Form from '../general/Form';
import Go from '../general/Go';

const Login = () => {
    return (
        <Container height={400}>
            <Logo width={180} />
            <Form width={300}>
                <Input text="email" type="email" required />
                <Input text="senha" type="password" required />
                <Button text="Entrar" type="submit" />
            </Form>
            <Go to="/cadastro">Não tem uma conta? Cadastre-se!</Go>
        </Container>
    );
}

export default Login;
