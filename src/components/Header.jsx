import styled from 'styled-components';

const HeaderStyle = styled.header`
	position: relative;
	height: 150dvh;
	background: linear-gradient(
			to right bottom,
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.1)
		),
		url(/src/assets/hero.png) no-repeat center center/cover;
	z-index: -1;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 12vh;
		background-image: linear-gradient(
			to right,
			rgba(255, 255, 255, 0.1),
			rgba(255, 255, 255, 0.2)
		);
	}
`;

export default function Header() {
	return <HeaderStyle></HeaderStyle>;
}
