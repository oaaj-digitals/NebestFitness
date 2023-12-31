import { styled as s } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTiktok,
	faWhatsapp,
	faXTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FullLogo from "../assets/images/nebest-full-logo.svg";
import { breakpoints } from "../services/design-breakpoints";

const FooterBox = s.footer`
    width: 100%;
    height: max-content;
    padding: 4rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
	gap: 4rem;
	border-top: 1px solid #f5f5f555;

	@media (max-width: ${breakpoints.phone}) {
		gap: 5rem;
		justify-content: center;
        & > p {
			width: 100%;
			order: 5;
			text-align: center;
		}
	}
`;

const Logo = s.img`
	display: inline-block;
	height: 4rem;
`;

const NavBar = s.nav`
    width: 100%;
	display: flex;
	gap: 3rem;
	font-size: 1.3rem !important;

	@media (max-width: ${breakpoints.phone}) {
        justify-content: center;
		gap: 2rem;
	}
`;

const SocialMediaBox = s.div`
	display: flex;
	gap: 3rem;
`;

const footer = () => {
	return (
		<FooterBox>
			<NavBar>
				<a href="/#header">Home</a>
				<a href="/#about-us">About Us</a>
				<a href="/#services">Services</a>
				<a href="/#gallery">Gallery</a>
				<a href="/#testimonials">Testimonials</a>
				<a href="/#contact-us">Contact Us</a>
				<a href="/#blog">Blog</a>
			</NavBar>

			<SocialMediaBox>
				<a
					href="https://instagram.com/nebestfitness"
					target="_blank"
					aria-label="Link to Instagram account"
				>
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>
				<a
					href="https://wa.me/message/JX6TOLTPPD26J1"
					target="_blank"
					aria-label="Link to Whatsapp account"
				>
					<FontAwesomeIcon icon={faWhatsapp} size="2x" />
				</a>
				<a
					href="https://x.com/nebestfitness"
					target="_blank"
					aria-label="Link to X(Twitter) account"
				>
					<FontAwesomeIcon icon={faXTwitter} size="2x" />
				</a>
				<a
					href="https://tiktok.com/@nebestfitness"
					target="_blank"
					aria-label="Link to TikTok account"
				>
					<FontAwesomeIcon icon={faTiktok} size="2x" />
				</a>
				<a
					href="https://facebook.com/profile.php?id=100078758541400"
					target="_blank"
					aria-label="Link to Facebook page"
				>
					<FontAwesomeIcon icon={faFacebookF} size="2x" />
				</a>
				<a
					href="https://www.youtube.com/@NebestFitness"
					target="_blank"
					aria-label="Link to Youtube page"
				>
					<FontAwesomeIcon icon={faYoutube} size="2x" />
				</a>
			</SocialMediaBox>

			<p>2023 &copy; Copyright</p>

			<Logo src={FullLogo} alt="NebestFitness Logo" />
		</FooterBox>
	);
};

export default footer;
