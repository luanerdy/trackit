import axios from 'axios';
import React, { useContext } from 'react';
import Habit from './Habit';
import UserContext from '../../../contexts/UserContext';

const HabitList = ({ habits }) => {
	const {
		userData: { token },
	} = useContext(UserContext);

	const deleteHabit = (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		if (window.confirm('Deseja deletar o Hábito?')) {
			axios
				.delete(
					`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
					config
				)
				.catch((err) => alert('Erro! Tente Novamente!'));
		}
	};

	return (
		<>
			{habits.map((habit) => (
				<Habit
					onClick={() => deleteHabit(habit.id)}
					key={habit.id}
					name={habit.name}
					days={habit.days}
				/>
			))}
		</>
	);
};

export default HabitList;
