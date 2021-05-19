import React from 'react';
import StyledButton from './styles';

const Button = ({text}) => {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    );
}

export default Button;