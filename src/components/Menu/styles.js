import styled from "styled-components";

const StyledMenu = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    max-width: 600px;
    background-color: #fff;
    color: #52B6FF;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 20;
`;

export default StyledMenu;