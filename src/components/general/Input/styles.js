import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    margin: 3px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    font-size: 20px;
    padding: 9px;

    &::placeholder {
        color: #D4D4D4;
    }
`;

export default StyledInput;