import axios from 'axios';

const handleSubmit = (
	event,
	email,
	password,
	history,
	setDisabled,
	setUserData,
	setPassword
) => {
	event.preventDefault();
	setDisabled(true);

	const data = {
		email,
		password,
	};

	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
			data
		)
		.then((res) => {
			const userData = {
				token: res.data.token,
				username: res.data.name,
				image: res.data.image,
			};
			setUserData(userData);
			window.localStorage.setItem('user', JSON.stringify(userData));
			history.push('/hoje');
		})
		.catch((err) => {
			console.log(err);
			alert('Email ou senha incorretos. Tente novamente!');
			setDisabled(false);
		});

	setPassword('');
};

export default handleSubmit;
