import axios from 'axios';

const handleSubmit = (
	event,
	email,
	name,
	image,
	password,
	history,
	setDisabled,
	setPassword
) => {
	event.preventDefault();
	setDisabled(true);

	const data = {
		email,
		name,
		image,
		password,
	};

	axios
		.post(
			'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
			data
		)
		.then((res) => {
			history.push('/');
		})
		.catch((err) => {
			alert(`${err.response.data.message} Tente novamente!`);
			setDisabled(false);
		});

	setPassword('');
};

export default handleSubmit;
