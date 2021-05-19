import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../general/Input';
import Button from '../general/Button';
import Container from '../general/Container';
import Logo from '../general/Logo';

const Login = () => {
    return (
        <Container heigth={400}>
            <Logo width={180} />
            <Container>
                <Input text="email" />
                <Input text="senha" />
                <Button text="Entrar" />
            </Container>
            <Link to="/" />
        </Container>
    );
}

export default Login;
