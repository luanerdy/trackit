import React from 'react';
import Button from '../general/Button';
import Container from '../general/Container';
import Title from '../general/Title';
import Message from '../general/Message';
import HabitList from './HabitList';
import { FiPlus } from 'react-icons/fi';

const Habits = () => {
	return (
		<Container padding="70px 18px 120px" bgColor="#E5E5E5" minH="100vh" justify="start">
			<Container horizontal margin="20px 0 15px">
				<Title text="Meus hábitos" />
				<Button width={40} height={35}>
					<FiPlus />
				</Button>
			</Container>
			<HabitList />
			<Message text="Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" />
		</Container>
	);
};

export default Habits;
