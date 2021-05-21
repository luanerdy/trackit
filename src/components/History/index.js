import React from 'react';
import Container from '../general/Container';
import Message from '../general/Message';
import Title from '../general/Title';

const History = () => {
	return (
		<Container
			padding="70px 18px 120px"
			bgColor="#E5E5E5"
			minH="100vh"
			justify="start"
            align="start"
		>
            <Container horizontal justify="start" height="80px">
                <Title text="Histórico" />
            </Container>
            <Message size="18px" text="Em breve você poderá ver o histórico dos seus hábitos aqui!" />
		</Container>
	);
};

export default History;
