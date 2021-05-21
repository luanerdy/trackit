import React, { useContext, useEffect } from 'react';
import Avatar from '../general/Avatar';
import StyledTopBar from './styles';
import UserContext from '../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import Container from '../general/Container';
import Button from '../general/Button';
import { FiLogOut } from "react-icons/fi";

const TopBar = () => {
	const {userData: {image}, verifyLogin, logout} = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		verifyLogin(history);
	}, [history]);

	return (
		<StyledTopBar>
			<Link to="/hoje"><img width="100px" src="./img/icon_white.svg" /></Link>
			<Container horizontal width={110}>
				<Avatar
					width={50}
					src={image}
					radius={50}
				/>
				<Button width={40} height={40} radius={50} onClick={() => logout(history)}>
					<FiLogOut />
				</Button>
			</Container>
		</StyledTopBar>
	);
};

export default TopBar;
