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
import { breakpoints } from "../services/design-breakpoints";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const HeaderBox = s.header`
	width: 100%;
	height: 100vh;
	padding-top: 8rem;
	overflow: hidden;
	
	background-image: url(${BgImg});
	background-size: cover;
	background-position: center;

	@media (max-width: ${breakpoints.tabLand}) {
        height: 70vw;
		max-height: 100vh
	}

	@media (max-width: ${breakpoints.tabPort}) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 20vh;
		padding-top: calc(8rem + 20vh);
		min-height: 70vh;
		height: max-content;
		max-height: 100vh
	}
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

	@media (max-width: ${breakpoints.tabPort}) {
		display: none;
		width:100%;
		height:110vh;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 90;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 5rem;
		padding: 10rem 4rem;
		overflow: scroll;	
		
		background:rgba(0,0,0,0.8);
		backdrop-filter: blur(5px);

		& > a{
			width: 100%;
			height: fit-content;
			padding: 1rem 0;
			text-align: center;
			font-size: 3rem;
		}
		
		& > a:hover {
			color: var(--color-black);
			background: var(--color-white);
		}
	}
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

	@media (max-width: ${breakpoints.tabPort}) {
		position: static;
		transform: translateY(0%);
		width: 100%;
		padding: 0 15vw;
		text-align: center;
		align-items: center;
	}
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
	
	@media (max-width: ${breakpoints.tabPort}) {
		position: static;
		width: 100%;
		padding: 0 15vw 3vh;
		justify-content: center;
	}
`;

const MenuBtn = s.div`
	color: var(--color-white) !important;
	display: none;
	z-index: 100;
	@media (max-width: ${breakpoints.tabPort}) {
		display: block;
	}
`;

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuOpen = (state: boolean) => {
		const screen = window.innerWidth;
		const breakPoint = parseInt(breakpoints.tabPort) * 16;

		screen <= breakPoint ? setIsMenuOpen(!state) : null;
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, []);

	return (
		<HeaderBox id="header">
			<HeaderTop>
				<Logo src={FullLogo} />
				<div>
					<MenuBtn
						onClick={() => {
							handleMenuOpen(isMenuOpen);
						}}
					>
						<FontAwesomeIcon
							icon={isMenuOpen ? faXmark : faBars}
							size="3x"
						/>
					</MenuBtn>
					<NavBar style={isMenuOpen ? { display: "flex" } : {}}>
						<a
							href="/#header"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Home
						</a>
						<a
							href="/#about-us"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							About Us
						</a>
						<a
							href="/#services"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Services
						</a>
						<a
							href="/#gallery"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Gallery
						</a>
						<a
							href="/#testimonials"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Testimonials
						</a>
						<a
							href="/#contact-us"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Contact Us
						</a>
						<a
							href="/#blog"
							onClick={() => {
								handleMenuOpen(isMenuOpen);
							}}
						>
							Blog
						</a>
					</NavBar>
				</div>
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
