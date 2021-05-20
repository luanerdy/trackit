import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-flow: ${(props) => (props.horizontal ? 'row' : 'column')} nowrap;
	align-items: center;
	justify-content: space-between;
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	height: ${(props) => (props.height ? `${props.height}px` : '100%')};
`;

export default StyledContainer;
