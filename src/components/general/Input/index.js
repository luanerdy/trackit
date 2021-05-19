import React from 'react';
import StyledInput from './styles';

const Input = ({text}) => {
    return (
        <StyledInput placeholder={text} />
    );
}

export default Input;
