import React from 'react';
import StyledInput from './styles';

const Input = ({text, type, required}) => {
    return (
        <StyledInput placeholder={text} type={type || "text"} required={required || false}/>
    );
}

export default Input;
