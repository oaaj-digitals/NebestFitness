import { styled as s } from "styled-components";
import Section from "./Section";

const Container = s.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;

`;

const IntroText = s.p`
    flex-shrink: 0;
`;

const FeedBox = s.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-evenly;
`;

const FeedCard = s.div`
    width: 30rem;
    height: 40rem;
    padding: 2rem;
    background: linear-gradient(to bottom, var(--color-red), transparent );
    font-size: 1.2rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background: var(--color-red);
`;

const Blog = () => {
	return (
		<Section title="Follow Our Story" id="blog">
			<Container>
				<IntroText>
					Dive in with us for the latest fitness tips, nutrition
					advice, success stories, and exclusive behind-the scenes
					content. Stay connected with NebestFitness and be part of a
					thriving community committed to wellness.
				</IntroText>

				<FeedBox>
					<FeedCard>Instagram Feeds</FeedCard>

					<FeedCard>Instagram Feeds</FeedCard>

					<FeedCard>Instagram Feeds</FeedCard>
				</FeedBox>
			</Container>
		</Section>
	);
};

export default Blog;
