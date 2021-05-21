import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    margin: 3px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    padding: 9px;
    background-color: white;

    &::placeholder {
        color: #D4D4D4;
    }
    
    &:disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
    }

    &:focus {
        outline-color: #52B6FF;
    }
`;

export default StyledInput;