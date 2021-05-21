import React from 'react';
import StyledContainer from './styles';

const Container = ({
	children,
	width,
	height,
	horizontal,
	bgColor,
	radius,
	padding,
	justify,
	margin,
	minH,
	minW
}) => {
	return (
		<StyledContainer
			width={width}
			height={height}
			horizontal={horizontal}
			bgColor={bgColor}
			radius={radius}
			padding={padding}
			margin={margin}
			justify={justify}
			minH={minH}
			minW={minW}
		>
			{children}
		</StyledContainer>
	);
};

export default Container;
