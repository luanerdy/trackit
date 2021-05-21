import React, { useContext, useEffect, useState } from 'react';
import Button from '../general/Button';
import Container from '../general/Container';
import Title from '../general/Title';
import Message from '../general/Message';
import HabitList from './HabitList';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import CreateHabit from './CreateHabit';

const Habits = () => {
	const [habits, setHabits] = useState([]);
	const [create, setCreate] = useState(false);
	const {
		userData: { token },
	} = useContext(UserContext);

	const getHabits = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
		axios
			.get(
				'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
				config
			)
			.then((res) => {
				setHabits(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	};

	useEffect(getHabits, [habits]);

	return (
		<Container
			padding="70px 18px 120px"
			bgColor="#E5E5E5"
			minH="100vh"
			justify="start"
		>
			<Container horizontal margin="20px 0 15px">
				<Title text="Meus hábitos" />
				<Button width={40} height={35} onClick={() => setCreate(true)}>
					<FiPlus />
				</Button>
			</Container>
			{create ? <CreateHabit setCreate={setCreate} /> : null}
			<HabitList habits={habits} />
			{habits.length === 0 ? (
				<Container margin="30px 0 0">
					<Message
						size="18px"
						text="Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
					/>
				</Container>
			) : null}
		</Container>
	);
};

export default Habits;
