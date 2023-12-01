import { styled as s } from "styled-components";
import Section from "./Section";
import aboutImage from "../assets/images/IMG_1377.jpg";
import { breakpoints } from "../services/design-breakpoints";

const AboutBg = s.div`
	width: 200%;
	height: 48%;
	position: absolute;
	top: 50%;
	left: -50%;
	transform: rotate(135deg);
	background: var(--color-gray);
	opacity: .4;

	@media (max-width: ${breakpoints.phone}) {
		width: 220%;
		height: 30%;
	}
`;

const ImageBox = s.div`
	width: 25rem;
	height: 40rem;
    transform: skew(-10deg);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;

	& > img {
		display: inline-block;
        width: 136%;
    	transform: skew(10deg);
		object-fit: cover;
    }

	@media (max-width: ${breakpoints.phone}) {
		width: 50vw;
		height: max-content;
	}
`;

const TextContentBox = s.div`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 4rem; 

	@media (max-width: ${breakpoints.phone}) {
		width: 100%;
		order: -1;
	}
`;

const TitleBox = s.div`
    align-self: flex-end;

	@media (max-width: ${breakpoints.phone}) {
		align-self: center;
	}
`;

const Title = s.h2`
    font: var(--primary-heading);
    line-height: .9;
`;

const Text = s.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

	@media (max-width: ${breakpoints.phone}) {
		padding: 0 2rem;
		gap: 1rem;
	}
`;

const Container = s.div`
	width: 100%;
	padding: 13rem 0 7rem 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: radial-gradient(circle at 50% 50%, var(--color-gray), var(--color-black) 40%);
	overflow: hidden;

	@media (max-width: ${breakpoints.phone}) {
		flex-direction: column;
		padding: 11rem 0 5rem 0;
		gap: 3rem;
	}
`;

const About = () => {
	return (
		<Section id="about-us" padding="0">
			<Container>
				<AboutBg></AboutBg>
				<ImageBox>
					<img src={aboutImage} alt="" />
				</ImageBox>
				<TextContentBox>
					<TitleBox>
						<Title>About Us</Title>
						<div className="underline"></div>
					</TitleBox>
					<Text>
						<p>
							At NebestFitness, we believe in the power of
							personalized fitness.
						</p>
						<p>
							We are passionate and dedicated to guiding you
							towards your fitness goals with a tailored approach
							that considers your unique needs and aspirations.
						</p>
						<p>
							We are not just a fitness organization, we are your
							partner in health.
						</p>
					</Text>
				</TextContentBox>
			</Container>
		</Section>
	);
};

export default About;
