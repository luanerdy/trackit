import React from 'react';
import StyledAvatar from './styles';

const Avatar = ({ width, src }) => {
	return (
		<StyledAvatar src={src} width={`${width}px`} height={`${width}px`} />
	);
};

export default Avatar;
