import { styled as s } from "styled-components";
import Section from "./Section";
import gItem1 from "../assets/videos/GVTS-1.mp4";
import gItem2 from "../assets/images/Image-1.png";
import gItem3 from "../assets/images/IMG_1421.jpg";
import gItem4 from "../assets/videos/GVTS-2.mp4";
import gItem5 from "../assets/videos/video-1.mp4";
import gItem6 from "../assets/videos/GVTS-3.mp4";
import gItem7 from "../assets/images/Image-2.png";
import gItem8 from "../assets/videos/GVTS-5.mp4";
import vPoster from "../assets/images/logo-pattern-red.svg";
import { breakpoints } from "../services/design-breakpoints";

const GalleryBox = s.div`
    width: 90%;
    height: calc(100vw/3.2);
    max-height: 100%;
    margin-top: 2rem;

    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(8, 1fr);

    & div.grid-item {
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
    }

    & video,& img {
        width: 100%;
        height: 100%;
        display: inline-block;
        object-fit: cover;
        object-position: top;
    }

    & video {
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.tabPort}) {
        width: 100%;
        height: max-content;
        max-height: max-content;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(26, calc(100vw/8));
	}
`;

const Item1 = s.div`
    grid-column: 5 / span 3;
    grid-row: 1 / span 8;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 1 / span 4;
        grid-row: 9 / span 9;
    }
`;

const Item2 = s.div`
    grid-column: 3 / span 2;
    grid-row: 1 / span 3;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 3 / span 2;
        grid-row: 1 / span 3;
    }
`;

const Item3 = s.div`
    grid-column: 10 / span 2;
    grid-row: 1 / span 5;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 3 / span 2;
        grid-row: 18 / span 5;
    }
`;

const Item4 = s.div`
    grid-column: 1 / span 2;
    grid-row: 5 / span 4;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 1 / span 2;
        grid-row: 5 / span 4;
    }
`;

const Item5 = s.div`
    grid-column: 8 / span 2;
    grid-row: 1 / span 5;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 1 / span 2;
        grid-row: 18 / span 5;
    }
`;

const Item6 = s.div`
    grid-column: 3 / span 2;
    grid-row: 4 / span 5;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 3 / span 2;
        grid-row: 4 / span 5;
    }
`;

const Item7 = s.div`
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 4;
    }
`;

const Item8 = s.div`
    grid-column: 8 / span 4;
    grid-row: 6 / span 3;

    @media (max-width: ${breakpoints.tabPort}) {
        grid-column: 1 / span 4;
        grid-row: 23 / span 4;
    }
`;

const Gallery = () => {
	return (
		<Section id="gallery" title="Explore Our Fitness Gallery">
			<GalleryBox>
				<Item1 className="grid-item">
					<video controls preload="none" poster={vPoster}>
						<source type="video/mp4" src={gItem1} />
					</video>
				</Item1>

				<Item2 className="grid-item">
					<img src={gItem2} alt="" loading="lazy" />
				</Item2>

				<Item3 className="grid-item">
					<img src={gItem3} alt="" loading="lazy" />
				</Item3>

				<Item4 className="grid-item">
					<video controls preload="none" poster={vPoster}>
						<source type="video/mp4" src={gItem4} />
					</video>
				</Item4>

				<Item5 className="grid-item">
					<video controls preload="none" poster={vPoster}>
						<source type="video/mp4" src={gItem5} />
					</video>
				</Item5>

				<Item6 className="grid-item">
					<video controls preload="none" poster={vPoster}>
						<source type="video/mp4" src={gItem6} />
					</video>
				</Item6>

				<Item7 className="grid-item">
					<img src={gItem7} alt="" loading="lazy" />
				</Item7>

				<Item8 className="grid-item">
					<video controls preload="none" poster={vPoster}>
						<source type="video/mp4" src={gItem8} />
					</video>
				</Item8>
			</GalleryBox>
		</Section>
	);
};

export default Gallery;
