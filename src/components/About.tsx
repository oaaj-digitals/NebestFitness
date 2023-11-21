import { styled as s } from "styled-components";
import Section from "./Section";
import aboutVideo from "../assets/videos/video-1.mp4";
import playIcon from "../assets/icons/play_circle_FILL0_wght400_GRAD0_opsz24.svg";
import pauseIcon from "../assets/icons/pause_circle_FILL0_wght400_GRAD0_opsz24.svg";
import { useEffect, useState } from "react";

const AboutBg = s.div`
    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;

    // background: radial-gradient(circle at 50% 50%, var(--color-gray), var(--color-black) 60%);
`;

const VideoBox = s.div`
    height: 80%;
    transform: skew(-10deg);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    transition: all .4s linear;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;

    &:hover .VideoCover {
        display: inline-block !important;
    }

    & > video {
        height: 100%;   
        transform: skew(10deg) scale(1.3);
    }

    &.isPlaying {
        transform: skew(0) !important;

        & > video {
            transform: skew(0) scale(1) !important;
        }

         & > .VideoCover {
            transform: translate(-50%, -50%) skew(0)!important;
        }
    }
`;

const VideoCover = s.div`
    width: 200%;
    height: 200%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) skew(10deg);
    transition: all .4s linear;
    background-color: rgb(0,0,0,0.6);
    
    & > img {
        display: inline-block;
        height: 5%; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const TextContentBox = s.div`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

`;

const TitleBox = s.div`
    align-self: flex-end;
`;

const Title = s.h2`
    font: var(--primary-heading);
    line-height: .9;
`;

const Text = s.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const videoPlayer = document.getElementById(
		"about-video"
	) as HTMLVideoElement;

	const handlePlaying = () => {
		setIsPlaying(!isPlaying);
	};

	const handleVideoEnd = () => {
		videoPlayer.currentTime = 0;
		handlePlaying();
	};

	useEffect(() => {
		setIsPlaying(false);
		videoPlayer ? (videoPlayer.volume = 0.01) : null;
	}, []);

	useEffect(() => {
		if (videoPlayer) {
			isPlaying ? videoPlayer.play() : videoPlayer.pause();
		}
	}, [isPlaying]);

	return (
		<Section id="about-us" padding="0">
			<AboutBg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					// height="1521"
					viewBox="0 0 1920 1521"
					fill="none"
				>
					<g style={{ mixBlendMode: "luminosity" }} opacity="0.1">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 0V94.0684L1921 1521V853.224L826.278 0H0Z"
							fill="#E32226"
						/>
					</g>
				</svg>
			</AboutBg>
			<VideoBox className={isPlaying ? "isPlaying" : ""}>
				<video
					id="about-video"
					src={aboutVideo}
					// poster={videoThumb}
					onEnded={handleVideoEnd}
				/>
				<VideoCover
					className="VideoCover"
					style={
						isPlaying
							? { display: "none" }
							: { display: "inline-block" }
					}
					onClick={handlePlaying}
				>
					<img src={isPlaying ? pauseIcon : playIcon} alt="" />
				</VideoCover>
			</VideoBox>
			<TextContentBox>
				<TitleBox>
					<Title>About Us</Title>
					<div className="underline"></div>
				</TitleBox>
				<Text>
					<p>
						At NebestFitness, we believe in the power of
						personalized fitness.
					</p>
					<p>
						We are passionate and dedicated to guiding you towards
						your fitness goals with a tailored approach that
						considers your unique needs and aspirations.
					</p>
					<p>
						We are not just a fitness organization, we are your
						partner in health.
					</p>
				</Text>
			</TextContentBox>
		</Section>
	);
};

export default About;
