import React, { Children } from 'react';
import Loader from 'react-loader-spinner';
import StyledButton from './styles';

const Button = ({ text, disabled, width, height, color, font, radius, children, onClick }) => {
	return (
		<StyledButton
			disabled={disabled}
			width={width}
			height={height}
			color={color}
			font={font}
			radius={radius}
			onClick={onClick}
		>
			{disabled ? (
				<Loader type="ThreeDots" color="#fff" height={45} width={60} />
			) : (
				text || children
			)}
		</StyledButton>
	);
};

export default Button;
