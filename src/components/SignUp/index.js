import React, { useEffect, useState } from 'react';
import Input from '../general/Input';
import Button from '../general/Button';
import Container from '../general/Container';
import Form from '../general/Form';
import Go from '../general/Go';
import handleSubmit from './_handleSubmit';
import { useHistory } from 'react-router';

const SignUp = ({verifyLogin}) => {
	const [disabled, setDisabled] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const history = useHistory();

	useEffect(() => {
		verifyLogin(history);
	}, [history]);

	return (
		<Container height={500}>
			<img width="180px" src="./img/logo.svg" />
			<Form
				width={300}
				onSubmit={(event) =>
					handleSubmit(
						event,
						email,
						name,
						image,
						password,
						history,
						setDisabled,
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
				<Input
					text="nome"
					required
					data={{ value: name, setValue: setName }}
				/>
				<Input
					text="link da foto"
					data={{ value: image, setValue: setImage }}
				/>
				<Button text="Cadastrar" type="submit" />
			</Form>
			<Go to="/">Já tem uma conta? Faça login!</Go>
		</Container>
	);
};

export default SignUp;
