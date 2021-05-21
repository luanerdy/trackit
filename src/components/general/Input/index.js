import React from 'react';
import StyledInput from './styles';

const Input = ({ text, type, required, disabled, data }) => {
	return (
		<StyledInput
			placeholder={text}
			type={type || 'text'}
			required={required || false}
			disabled={disabled}
			value={data.value}
			onChange={(e) => data.setValue(e.target.value)}
		/>
	);
};

export default Input;
