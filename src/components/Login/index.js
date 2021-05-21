import React, { useEffect, useState } from 'react';
import Input from '../general/Input';
import Button from '../general/Button';
import Container from '../general/Container';
import Form from '../general/Form';
import Go from '../general/Go';
import handleSubmit from './_handleSubmit';
import { useHistory } from 'react-router';

const Login = ({ setUserData, verifyLogin }) => {
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	useEffect(() => {
		verifyLogin(history);
	}, [history]);

	return (
		<Container justify="center" height="100vh">
			<Container height="400px">
				<img width="180px" src="./img/logo.svg" />
				<Form
					width={300}
					onSubmit={(event) =>
						handleSubmit(
							event,
							email,
							password,
							history,
							setDisabled,
							setUserData,
							setPassword
						)
					}
					disabled={disabled}
				>
					<Input
						text="email"
						type="email"
						required
						data={{ value: email, setValue: setEmail }}
					/>
					<Input
						text="senha"
						type="password"
						required
						data={{ value: password, setValue: setPassword }}
					/>
					<Button text="Entrar" type="submit" />
				</Form>
				<Go to="/cadastro">Não tem uma conta? Cadastre-se!</Go>
			</Container>
		</Container>
	);
};

export default Login;
