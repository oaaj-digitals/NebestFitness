import { styled as s } from "styled-components";
import Section from "./Section";

const ContactInfo = s.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoBox = s.div`
   font-size: 3rem !important;

   & > p > span {
    font: var(--secondary-heading) !important;
   }
`;

const TitleBox = s.div`
    width: max-content;
`;

const Title = s.h2`
    font: var(--primary-heading);
    line-height: .9;
    font-size: 7rem;
`;

const Contact = () => {
	return (
		<Section height="50vh" id="contact-us">
			<ContactInfo>
				<InfoBox>
					<p>
						<span>Phone:</span> 07501 080466
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
