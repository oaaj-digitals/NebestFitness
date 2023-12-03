import { styled as s } from "styled-components";
import { breakpoints } from "../services/design-breakpoints";

interface Props {
	title: string;
	imgSrc: string;
}

const Service = s.div`
    width: 100%;
    height: 100%;
    // cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    box-shadow: 10px 10px 0 rgb(255,255,255,0.4);
    
    transition: all .2s ease-in;

    &:hover {
        box-shadow: 15px 15px 0 rgb(255,255,255,0.4);
    }

    &:hover img {
        opacity: 1;
    }

    @media (max-width: ${breakpoints.tabPort}) {
        width: 23rem;
        height: 15rem;
	}

    @media (max-width: ${breakpoints.phone}) {
        width: calc(85vw/2.5);
        height: calc(85vw/3.5);
		flex-shrink: 0;
        text-align: center;
	}
`;

const ImageBox = s.div`
    display: inline-block;
    width: 100%
    height: 100%;
    overflow: hidden;
    background-color: var(--color-black);
`;

const Image = s.img`
    display: inline-block;
    width: 100%;
    opacity: .6;
    transition: all .2s ease-in;
`;

const Title = s.p`
    flex-shrink: 0;
    width: 100%;
    height: max-content;
    padding: .5rem;
    font: var(--tertiary-heading);
    letter-spacing: .5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-black);

`;

const ServicesCard = ({ title, imgSrc }: Props) => {
	return (
		<Service>
			<ImageBox>
				<Image src={imgSrc} alt={title + " image"} />
			</ImageBox>
			<Title>{true && title}</Title>
		</Service>
	);
};

export default ServicesCard;
