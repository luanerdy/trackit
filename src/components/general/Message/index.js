import React from 'react';
import StyledTitle from './styles';

const Message = ({text}) => {
    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    );
}

export default Message;
