import styled from "styled-components";

const StyledTopBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    max-width: 600px;
    background-color: #126BA5;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
    z-index: 20;
`;

export default StyledTopBar;