import React from 'react';
import Container from '../../general/Container';
import { FiCheck } from 'react-icons/fi';
import Message from '../../general/Message';

const DayHabit = ({ name, done, currentSequence, highestSequence }) => {
	return (
		<Container
			horizontal
			bgColor="white"
			height="95px"
			padding="13px"
			radius="5px"
            margin="5px 0"
		>
			<Container align="start">
				<Message text={name} size="20px" />
				<Container align="start" height="32px">
					<Message text={`Sequência atual: ${currentSequence} dias`} size="13px" />
					<Message text={`Seu recorde: ${highestSequence} dias`} size="13px" />
				</Container>
			</Container>
			<Container
				bgColor={done ? '#8FC549' : '#EBEBEB'}
				width="80px"
				height="70px"
				justify="center"
				radius="5px"
			>
				<FiCheck />
			</Container>
		</Container>
	);
};

export default DayHabit;
