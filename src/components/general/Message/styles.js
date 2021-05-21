import styled from "styled-components";

const StyledTitle = styled.p`
    color: ${props => props.color ? props.color : "#666666"};
    font-size: ${props => props.size ? props.size : "18px"};
`;

export default StyledTitle;
