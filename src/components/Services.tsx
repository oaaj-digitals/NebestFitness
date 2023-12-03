import { styled as s } from "styled-components";
import Section from "./Section";
import BgImg from "../assets/images/logo-pattern-red.svg";
import ServicesCard from "./ServicesCard";
import personalTrainingImg from "../assets/images/personal-training.png";
import weightLossImg from "../assets/images/cathy-pham-3jAN9InapQI-unsplash (2).jpg";
import NutritionImg from "../assets/images/brooke-lark-nTZOILVZuOg-unsplash (2).jpg";
import wellnessImg from "../assets/images/dane-wetton-t1NEMSm1rgI-unsplash (2).jpg";
import MartialArtImg from "../assets/images/mark-adriane-FH6JcaCrYJ0-unsplash (2).jpg";
import SelfDefenseImg from "../assets/images/samuel-castro-cwScwJy5HQE-unsplash (2).jpg";
import Btn from "./Btn";
import { breakpoints } from "../services/design-breakpoints";

const ServicesBox = s.div`
    width: 100%;
    height: 90%;
    
    display: grid;
    grid-template-columns: repeat(3, 23rem);
    grid-template-rows: repeat(2, 15rem);
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
	gap: 5rem;
	background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
	padding: 5rem 0;

	@media (max-width: ${breakpoints.tabPort}) {
		height: max-content;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
`;

const Services = () => {
	return (
		<Section id="services" title="Our Services" flexDirection="column">
			<ServicesBox>
				<ServicesCard
					imgSrc={personalTrainingImg}
					title="Personal Training"
				></ServicesCard>
				<ServicesCard
					imgSrc={weightLossImg}
					title="Weight Loss Program"
				></ServicesCard>
				<ServicesCard
					imgSrc={NutritionImg}
					title="Nutrition Plans"
				></ServicesCard>
				<ServicesCard
					imgSrc={wellnessImg}
					title="Wellness Program"
				></ServicesCard>
				<ServicesCard
					imgSrc={MartialArtImg}
					title="Martial Art Training"
				></ServicesCard>
				<ServicesCard
					imgSrc={SelfDefenseImg}
					title="Self-Defense Training"
				></ServicesCard>
			</ServicesBox>
			<Btn link="https://pdfbwss34k5.typeform.com/to/Cf2YXHll?typeform-source=linktr.ee">
				Start Today
			</Btn>
		</Section>
	);
};

export default Services;
