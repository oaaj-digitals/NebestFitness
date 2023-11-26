import { styled as s } from "styled-components";
import Section from "./Section";
import gItem1 from "../assets/videos/GVTS-1.mp4";
import gItem2 from "../assets/images/Image-1.png";
import gItem3 from "../assets/images/IMG_1421.jpg";
import gItem4 from "../assets/videos/GVTS-2.mp4";
import gItem5 from "../assets/images/IMG_1058.jpg";
import gItem6 from "../assets/videos/GVTS-3.mp4";
import gItem7 from "../assets/images/Image-2.png";
import gItem8 from "../assets/videos/GVTS-5.mp4";

const GalleryBox = s.div`
    width: 100%;
    height: auto;
    max-height: 90%;

    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    grid-template-columns: repeat(12, 1fr);
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
`;

const Item1 = s.div`
    grid-column: 1/4;
    grid-row: 1/9;
`;

const Item2 = s.div`
    grid-column: 4/6;
    grid-row: 1/4;
`;

const Item3 = s.div`
    grid-column: 4/6;
    grid-row: 4/9;
`;

const Item4 = s.div`
    grid-column: 6/9;
    grid-row: 1/5;
`;

const Item5 = s.div`
    grid-column: 6/9;
    grid-row: 5/9;
`;

const Item6 = s.div`
    grid-column: 9/11;
    grid-row: 1/6;
`;

const Item7 = s.div`
    grid-column: 11/13;
    grid-row: 1/6;
`;

const Item8 = s.div`
    grid-column: 9/13;
    grid-row: 6/9;
`;

const Gallery = () => {
	return (
		<Section id="gallery">
			<GalleryBox>
				<Item1 className="grid-item">
					<video src={gItem1} controls />
				</Item1>

				<Item2 className="grid-item">
					<img src={gItem2} alt="" />
				</Item2>

				<Item3 className="grid-item">
					<img src={gItem3} alt="" />
				</Item3>

				<Item4 className="grid-item">
					<video src={gItem4} controls />
				</Item4>

				<Item5 className="grid-item">
					<img src={gItem5} alt="" />
				</Item5>

				<Item6 className="grid-item">
					<video src={gItem6} controls />
				</Item6>

				<Item7 className="grid-item">
					<img src={gItem7} alt="" />
				</Item7>

				<Item8 className="grid-item">
					<video src={gItem8} controls />
				</Item8>
			</GalleryBox>
		</Section>
	);
};

export default Gallery;
