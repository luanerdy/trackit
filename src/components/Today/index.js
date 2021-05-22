import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import Container from '../general/Container';
import Message from '../general/Message';
import Title from '../general/Title';
import DayHabit from './DayHabit';
import dayjs from 'dayjs';

const Today = () => {
	const [dayHabits, setDayHabits] = useState([]);
    const now = dayjs();
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	const {
		userData: { token },
		setPercentage,
        percentage
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
				const checked = dayHabits.filter((h) => h.done === true);
				setPercentage(Math.round(100 * (checked.length / dayHabits.length)));
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, [dayHabits]);

	const handleCheck = (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const newDayHabits = dayHabits.filter((h) => h.id !== id);
		const newHabit = dayHabits.find((h) => h.id === id);
		axios
			.post(
				`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
				{},
				config
			)
			.then((res) => {
				newHabit.done = true;
				setDayHabits([...newDayHabits, newHabit]);
			})
            .then((res) => {
				const checked = dayHabits.filter((h) => h.done === true);
				setPercentage(Math.round(100 * (checked.length / dayHabits.length)));
			})
			.catch((err) => {
				alert('Erro! Tente Novamente!');
			});
	};

	const handleUncheck = (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const newDayHabits = dayHabits.filter((h) => h.id !== id);
		const newHabit = dayHabits.find((h) => h.id === id);
		axios
			.post(
				`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
				{},
				config
			)
			.then((res) => {
				newHabit.done = false;
				setDayHabits([...newDayHabits, newHabit]);
			})
            .then((res) => {
				const checked = dayHabits.filter((h) => h.done === true);
				setPercentage(Math.round(100 * (checked.length / dayHabits.length)));
			})
			.catch((err) => {
				alert('Erro! Tente Novamente!');
			});
	};

	return (
		<Container
			padding="70px 18px 120px"
			bgColor="#E5E5E5"
			minH="100vh"
			justify="start"
		>
			<Container height="110px" align="start" justify="center">
				<Title text={`${weekdays[now.$W]}, ${(now.$D/100).toFixed(2).replace('0.', '')}/${((now.$M+1)/100).toFixed(2).replace('0.', '')}`} />
				<Container height="5px"></Container>
				<Message
					text={
						percentage === 0
							? 'Nenhum hábito concluído ainda'
							: `${percentage}% dos hábitos concluídos`
					}
					color={percentage === 0 ? '#BABABA' : '#8FC549'}
				/>
			</Container>
			{dayHabits.map((h) => (
				<DayHabit
					onClick={
						h.done
							? () => handleUncheck(h.id)
							: () => handleCheck(h.id)
					}
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
