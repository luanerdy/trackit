import React from 'react';
import Container from '../../general/Container';
import { FiTrash2 } from "react-icons/fi";

const HabitList = () => {
	return (
		<Container
			margin="5px 0"
			height="90px"
			bgColor="#fff"
			radius="5px"
			horizontal
			padding="14px"
		>
			<Container width="234px"></Container>
			<Container width="15px"><FiTrash2 cursor="pointer" onClick={() => alert()} /></Container>
		</Container>
	);
};

export default HabitList;
