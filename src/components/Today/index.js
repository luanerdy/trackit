import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import Container from '../general/Container';
import Message from '../general/Message';
import Title from '../general/Title';
import DayHabit from './DayHabit';

const Today = () => {
	const [dayHabits, setDayHabits] = useState([]);
	const {
		userData: { token },
	} = useContext(UserContext);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.get(
				'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
				config
			)
			.then((res) => {
				setDayHabits(res.data);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, [dayHabits]);

	return (
		<Container
			padding="70px 18px 120px"
			bgColor="#E5E5E5"
			minH="100vh"
			justify="start"
		>
			<Container height="110px" align="start" justify="center">
				<Title text="Segunda, 17/05" />
				<Container height="5px"></Container>
				<Message text="Nenhum hábito concluído ainda" color="#BABABA" />
			</Container>
			{dayHabits.map((h) => (
				<DayHabit
                    key={h.id}
					done={h.done}
					name={h.name}
					currentSequence={h.currentSequence}
					highestSequence={h.highestSequence}
				/>
			))}
		</Container>
	);
};

export default Today;
