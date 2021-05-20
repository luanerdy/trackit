import React from 'react';
import StyledForm from './styles';

const Form = ({children, width}) => {
    return (
        <StyledForm width={width}>
            {children}
        </StyledForm>
    );
}

export default Form;
