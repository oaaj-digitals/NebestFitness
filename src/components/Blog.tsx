import { styled as s } from "styled-components";
import Section from "./Section";
import useFeeds from "../hooks/useFeeds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FeedCard from "./FeedCard";
import Btn from "./Btn";
import FeedCardSkeleton from "./FeedCardSkeleton";
import { breakpoints } from "../services/design-breakpoints";

const Container = s.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;
	gap: 4rem;
`;

const IntroText = s.p`
    flex-shrink: 0;
`;

const FeedBox = s.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-evenly;
	
	@media (max-width: ${breakpoints.phone}) {
		gap: 5rem;
		flex-wrap: wrap;
	}
`;

const Blog = () => {
	const { feeds, error, isLoading } = useFeeds();
	const skeletons = [0, 1, 2, 3];

	return (
		<Section title="Follow Our Story" id="blog" height="100vh">
			<Container>
				<IntroText>
					Dive in with us for the latest fitness tips, nutrition
					advice, success stories, and exclusive behind-the scenes
					content. Stay connected with NebestFitness and be part of a
					thriving community committed to wellness.
				</IntroText>

				<FeedBox>
					{/* {error && <p>{error}</p>} */}

					{(isLoading || error) &&
						skeletons.map((skeleton) => (
							<FeedCardSkeleton key={skeleton} error={error} />
						))}

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
