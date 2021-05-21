import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledMenu from './styles';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from '../../contexts/UserContext';

const Menu = () => {
    const {percentage} = useContext(UserContext);

	return (
		<StyledMenu>
			<Link to="/habitos">Hábitos</Link>
			<Link
				style={{
					width: 90,
					height: 90,
					marginBottom: 40,
					borderRadius: '50%',
				}}
				to="/hoje"
			>
				<CircularProgressbar
					color="white"
					value={percentage}
					text="Hoje"
					background
					backgroundPadding={6}
					styles={buildStyles({
						pathTransitionDuration: 0.5,
						pathColor: '#fff',
						textColor: '#fff',
						trailColor: 'transparent',
						backgroundColor: '#52B6FF',
					})}
				/>
			</Link>
			<Link to="/historico">Histórico</Link>
		</StyledMenu>
	);
};

export default Menu;
