import { styled as s } from "styled-components";
import Section from "./Section";
import aboutImage from "../assets/images/IMG_1421.jpg";

const AboutBg = s.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 50% 50%, var(--color-gray), var(--color-black) 40%);
	overflow: hidden;
	
    & > div {
		width: 200%;
		height: 57%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%) rotate(31deg);
		background: var(--color-gray);
		opacity: .4;
	}
`;

const ImageBox = s.div`
    height: 80%;
	width: 30rem;
    transform: skew(-10deg);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;

	& > img {
        width: 136%;
    	transform: skew(10deg);
    }

`;

const TextContentBox = s.div`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

`;

const TitleBox = s.div`
    align-self: flex-end;
`;

const Title = s.h2`
    font: var(--primary-heading);
    line-height: .9;
`;

const Text = s.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const About = () => {
	return (
		<Section id="about-us" padding="0">
			<AboutBg>
				<div></div>
			</AboutBg>
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
						We are passionate and dedicated to guiding you towards
						your fitness goals with a tailored approach that
						considers your unique needs and aspirations.
					</p>
					<p>
						We are not just a fitness organization, we are your
						partner in health.
					</p>
				</Text>
			</TextContentBox>
		</Section>
	);
};

export default About;
