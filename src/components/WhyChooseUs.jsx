import styled from 'styled-components';
import { Container, Grid } from '../style/CommonUI';

const WhyUsSection = styled.section`
	height: 50dvh;
	margin-top: -12vh;
`;

function WhyChooseUs() {
	return (
		<WhyUsSection>
			<Container>
				<Grid fractionLeft={0.4} fractionRight={0.6}>
					<div>
						<h2>Why choose us?</h2>
						<p>
							At Optical Essence, we stand apart in the world of interior
							design, offering unparalleled expertise and a commitment to
							transforming spaces into unique reflections of our client's
							lifestyles. Here's why you should choose us for your next design
							journey
						</p>
					</div>
					<div>
						<div>item 1</div>
						<div>item 2</div>
						<div>item 3</div>
						<div>item 4</div>
					</div>
				</Grid>
			</Container>
		</WhyUsSection>
	);
}

export default WhyChooseUs;
