import React, { useContext, useState } from 'react';
import Button from '../../general/Button';
import Container from '../../general/Container';
import Input from '../../general/Input';
import Form from '../../general/Form';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';

const CreateHabit = ({ setCreate }) => {
	const dayList = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {userData: {token}} = useContext(UserContext);
	const [days, setDays] = useState([]);
	const [habitName, setHabitName] = useState('');
	const [disabled, setDisabled] = useState(false);

    const createHabit = (event) => {
        event.preventDefault();
        setDisabled(true);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const data = {
            name: habitName,
            days
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', data, config)
        .then(res => {
            setCreate(false);
        }).catch(err => {
            console.log(err);
            alert('Erro! Tente novamente!');
        });
        setDisabled(false);
    };

	const toggleDay = (day) => {
		if (days.includes(day)) {
			setDays(days.filter((d) => d !== day));
		} else {
			setDays([...days, day]);
		}
	};

	return (
		<Container
			margin="5px 0"
			height="180px"
			bgColor="#fff"
			radius="5px"
			horizontal
			padding="14px"
		>
			<Container align="start">
				<Form width="100%" height="100%" onSubmit={createHabit}>
					<Container height="85px" align="start">
						<Input
							disabled={disabled}
							text="nome do hábito"
							type="text"
							required
							data={{ value: habitName, setValue: setHabitName }}
						/>
						<Container horizontal maxW="300px" height="40px">
							{dayList.map((day, index) => (
								<Input
									disabled={disabled}
									onClick={() => toggleDay(index)}
									type="button"
									key={index}
									text={day}
									width={30}
									height={30}
									padding="0"
									cursor="pointer"
									data={{ value: dayList[index] }}
									color={
										days.includes(index)
											? '#cfcfcf'
											: 'white'
									}
									fColor={
										days.includes(index)
											? 'white'
											: '#cfcfcf'
									}
									border="1px solid #cfcfcf"
								/>
							))}
						</Container>
					</Container>
					<Container horizontal height="35px" justify="flex-end">
						<Button
							onClick={() => setCreate(false)}
							disabled={disabled}
							text="Cancelar"
							width={85}
							height={35}
							font={16}
							color="white"
							fColor="#52B6FF"
						/>
						<Button
							disabled={disabled}
							text="Salvar"
							width={85}
							height={35}
							font={16}
						/>
					</Container>
				</Form>
			</Container>
		</Container>
	);
};

export default CreateHabit;
