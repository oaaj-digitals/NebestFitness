import { styled as s } from "styled-components";
import { Feed } from "../hooks/useFeeds";

interface Props {
	feed: Feed;
}

const Card = s.a`

    width: calc(100vw/5);
    height: calc(100vw/4);
    background: linear-gradient(to bottom, var(--color-red), transparent );
    font-size: 1.2rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background: var(--color-red);

    & a, & img {
        display: inline-block;
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: top;
    }

    &:hover > .caption {
        background:rgba(0,0,0,1);
    }
`;

const Caption = s.p`
    width: 100%;
    height: max-content;
    padding: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-white) !important;

    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    transition: all .2s ease-in;
    
    background:rgba(0,0,0,0.4);
    backdrop-filter: blur(5px);
`;

const FeedCard = ({ feed }: Props) => {
	const caption = feed.caption.substring(0, 100);
	return (
		<Card href={feed.permalink} target="_blank" rel="noopener noreferrer">
			<img src={feed.thumbnail_url || feed.media_url} alt="" />
			<Caption className="caption">
				{feed.caption && caption + "..."}
			</Caption>
		</Card>
	);
};

export default FeedCard;
