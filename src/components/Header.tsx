import { styled as s } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTiktok,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FullLogo from "../assets/images/nebest-full-logo.svg";
import BgImg from "../assets/images/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";

const HeaderBox = s.header`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const HeaderBg = s.div`
	width: 100%;
    overflow: hidden;
`;

const BgImage = s.svg`
	width: 100%;
	height: 100%;
    opacity: 0.4;
`;

const HeaderContent = s.div`
	width: 100%;
	height: 100%;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	
	& > *:not(:first-child) {
		margin: 0 6.5rem;
	}
`;

const HeaderTop = s.div`
	flex-shrink: 0;
	width: 100%;
	height: max-content;
	padding: 2rem 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-black);
	z-index: 100;
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
	display: flex;
	gap: 3rem;
	align-self: flex-end;
`;

const Header = () => {
	return (
		<HeaderBox>
			<HeaderBg>
				<BgImage
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1920 1080"
					fill="none"
				>
					<path
						opacity="0.4"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M821.032 1080H0V477.18L821.032 1080ZM1156.01 1080L0 223.72V0H717.859L1920 934.316V1080H1156.01ZM1054.92 0H1920V660.59L1054.92 0Z"
						fill="url(#pattern0)"
					/>
					<defs>
						<pattern
							id="pattern0"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<use
								href="#image0_302_59"
								transform="matrix(0.000244141 0 0 0.000434028 0 -0.0926649)"
							/>
						</pattern>
						<image
							id="image0_302_59"
							width="4096"
							height="2731"
							href={BgImg}
						/>
					</defs>
				</BgImage>

				{/* <BgCover
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1920 1080"
					fill="none"
				>
					<g style={{ mixBlendMode: "overlay", opacity: "0.2" }}>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M717.859 0L0 0V223.72L1156.01 1080H1920V934.316L717.859 0ZM1054.92 0H1920V660.591L1054.92 0ZM821.032 1080L0 477.181V1080H821.032Z"
							fill="#E32226"
						/>
					</g>
				</BgCover> */}
			</HeaderBg>

			<HeaderContent>
				<HeaderTop>
					<Logo src={FullLogo} />
					<NavBar>
						<a href="/">Home</a>
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
						transformative fitness experience. Embark on a journey
						of welness and strength with us.
					</p>
				</HeaderMain>

				<SocialMediaBox>
					<a
						href="https://instagram.com/nebestfitness"
						target="_blank"
					>
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
			</HeaderContent>
		</HeaderBox>
	);
};

export default Header;
