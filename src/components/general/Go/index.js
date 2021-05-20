import React from 'react';
import StyledLink from './styles';

const index = ({ children, to }) => {
    return (
        <StyledLink to={to}>
            {children}
        </StyledLink>
    );
}

export default index;
