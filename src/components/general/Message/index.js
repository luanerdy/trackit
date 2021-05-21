import React from 'react';
import StyledTitle from './styles';

const Message = ({text, size, color}) => {
    return (
        <StyledTitle size={size} color={color}>
            {text}
        </StyledTitle>
    );
}

export default Message;
