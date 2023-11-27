import { styled as s } from "styled-components";
import Section from "./Section";
import useFeeds from "../hooks/useFeeds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FeedCard from "./FeedCard";
import Btn from "./Btn";

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

const Blog = () => {
	const { feeds, error } = useFeeds();
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
					{error && <p>{error}</p>}
					{feeds.map((feed) => (
						<FeedCard key={feed.id} feed={feed}></FeedCard>
					))}
				</FeedBox>

				<Btn
					style={{ alignSelf: "flex-end" }}
					link="https://instagram.com/nebestfitness"
				>
					<p>Follow for more</p>
					<FontAwesomeIcon icon={faInstagram} size="xl" />
				</Btn>
			</Container>
		</Section>
	);
};

export default Blog;
