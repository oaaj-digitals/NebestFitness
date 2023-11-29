import { styled as s, keyframes } from "styled-components";
import { breakpoints } from "../services/design-breakpoints";

interface Props {
	error?: string;
}

interface styleProps {
	error?: string;
}

const loadinFades = keyframes`
    0% {
        
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const Card = s.div<styleProps>`
    width: calc(100vw/5);
    height: calc(100vw/4);
    font-size: 1.2rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background: linear-gradient(to bottom right, var(--color-red) 0%, transparent 100%);

    animation: ${({ error }: styleProps) =>
		error === "" ? loadinFades : ""} 1s ease-in-out infinite alternate;
    animation-fill-mode: forwards;

    @media (max-width: ${breakpoints.phone}) {
		width: calc(100vw/3);
        height: calc(100vw/2);
        flex-shrink: 0;
	}
`;

const Caption = s.div`
    width: 100%;
    height: 25%;

    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    
    background:rgba(0,0,0,0.8);
    backdrop-filter: blur(10px);
`;

const FeedCardSkeleton = ({ error }: Props) => {
	return (
		<Card>
			{true && error}
			<Caption></Caption>
		</Card>
	);
};

export default FeedCardSkeleton;
