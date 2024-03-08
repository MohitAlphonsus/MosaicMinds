import styled from 'styled-components';

const Container = styled.div`
	max-width: 114rem;
	margin: 0 auto;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: ${props => props.fractionLeft}fr ${props =>
			props.fractionRight}fr;
	gap: 4rem;
`;

export { Container, Grid };
