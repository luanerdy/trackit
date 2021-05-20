import React from 'react';
import Input from '../general/Input';
import Button from '../general/Button';
import Container from '../general/Container';
import Logo from '../general/Logo';
import Form from '../general/Form';
import Go from '../general/Go';

const SignUp = () => {
	return (
		<Container height={500}>
			<Logo width={180} />
			<Form width={300}>
				<Input text="email" type="email" required />
				<Input text="senha" type="password" required />
				<Input text="nome" required />
				<Input text="link da foto" />
				<Button text="Cadastrar" type="submit" />
			</Form>
			<Go to="/">Já tem uma conta? Faça login!</Go>
		</Container>
	);
};

export default SignUp;
