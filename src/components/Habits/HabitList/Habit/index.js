import React from 'react';
import Container from '../../../general/Container';
import { FiTrash2 } from 'react-icons/fi';
import Message from '../../../general/Message';
import Button from '../../../general/Button';

const Habit = ({ name, days, onClick }) => {
	const dayList = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

	return (
		<Container
			margin="5px 0"
			height="90px"
			bgColor="#fff"
			radius="5px"
			horizontal
			padding="14px"
		>
			<Container align="start">
				<Message size="20px" text={name} />
				<Container horizontal maxW="300px">
					{dayList.map((day, index) => (
						<Button
							key={index}
							text={day}
							width={30}
							height={30}
							color={
								days.includes(index) ? '#cfcfcf' : 'white'
							}
							fColor={
								days.includes(index) ? 'white' : '#cfcfcf'
							}
							border="1px solid #cfcfcf"
						/>
					))}
				</Container>
			</Container>
			<Container width="15px">
				<FiTrash2 cursor="pointer" onClick={onClick} />
			</Container>
		</Container>
	);
};

export default Habit;
