import { styled as s } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTiktok,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FullLogo from "../assets/images/nebest-full-logo.svg";
import BgImg from "../assets/images/headerBgImg.svg";

const HeaderBox = s.header`
	width: 100%;
	height: 100vh;
	padding-top: 8rem;
	overflow: hidden;
	
	background-image: url(${BgImg});
	background-size: cover;
	background-position: center;
`;

const HeaderTop = s.div`
	width: 100%;
	height: max-content;
	padding: 2rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-black);
	z-index: 30;

	position: fixed;
	left: 0;
	top: 0;
`;

const Logo = s.img`
	display: inline-block;
	height: 4rem;
`;

const NavBar = s.nav`
	display: flex;
	gap: 3rem;
	font-size: 1.3rem !important;
`;

const HeaderMain = s.div`
	position: absolute;
	top: calc(50% + 4rem);
	left: 4vw;
	transform: translateY(-50%);

	width: 60rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

const Title = s.h1`
	font: var(--primary-heading);
	line-height: .9;
`;

const SocialMediaBox = s.div`
	position: absolute;
	bottom: 5vh;
	right: 6vw;

	display: flex;
	gap: 4rem;
	align-self: flex-end;
`;

const Header = () => {
	return (
		<HeaderBox id="header">
			<HeaderTop>
				<Logo src={FullLogo} />
				<NavBar>
					<a href="/#header">Home</a>
					<a href="/#about-us">About Us</a>
					<a href="/#services">Services</a>
					<a href="/#gallery">Gallery</a>
					<a href="/#testimonials">Testimonials</a>
					<a href="/#contact-us">Contact Us</a>
					<a href="/#blog">Blog</a>
				</NavBar>
			</HeaderTop>

			<HeaderMain>
				<Title>Unleash Your Full Potential</Title>
				<div className="underline"></div>
				<p>
					Welcome to NebestFitness, Your destination for
					transformative fitness experience. Embark on a journey of
					welness and strength with us.
				</p>
			</HeaderMain>

			<SocialMediaBox>
				<a href="https://instagram.com/nebestfitness" target="_blank">
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>
				<a href="https://x.com/nebestfitness" target="_blank">
					<FontAwesomeIcon icon={faXTwitter} size="2x" />
				</a>
				<a
					href="https://facebook.com/profile.php?id=100078758541400"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebookF} size="2x" />
				</a>
				<a href="https://tiktok.com/@nebestfitness" target="_blank">
					<FontAwesomeIcon icon={faTiktok} size="2x" />
				</a>
			</SocialMediaBox>
		</HeaderBox>
	);
};

export default Header;
