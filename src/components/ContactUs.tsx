import { styled as s } from "styled-components";
import Section from "./Section";
import { breakpoints } from "../services/design-breakpoints";

const ContactInfo = s.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

	@media (max-width: ${breakpoints.tabPort}) {
        width: 100%;
	}

	@media (max-width: ${breakpoints.phone}) {
        width: 100%;
        height: max-content;
		flex-direction: column;
		gap: 3rem;
	}
`;

const InfoBox = s.div`
   font-size: 3rem !important;

   & > p > span {
    font: var(--secondary-heading) !important;
   }
`;

const TitleBox = s.div`
    width: max-content;

	@media (max-width: ${breakpoints.phone}) {
        order: -1;
	}
`;

const Title = s.h2`
    font: var(--primary-heading);
    line-height: .9;
    font-size: 7rem;

	@media (max-width: ${breakpoints.tabPort}) {
        font-size: 6rem !important;
	}
`;

const Contact = () => {
	return (
		<Section height="50vh" id="contact-us">
			<ContactInfo>
				<InfoBox>
					<p>
						<span>Phone:</span> +44(0) 7501 080466
					</p>
					<p>
						<span>Email:</span> NebestFitness@gmail.com
					</p>
				</InfoBox>
				<TitleBox>
					<Title>Contact Us</Title>
					<div className="underline"></div>
				</TitleBox>
			</ContactInfo>
		</Section>
	);
};

export default Contact;
