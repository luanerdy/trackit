import React from 'react';
import StyledContainer from './styles';

const Container = ({ children, width, height, horizontal }) => {
    return (
        <StyledContainer width={width} height={height} horizontal={horizontal}>
            {children}
        </StyledContainer>
    );
}

export default Container;
