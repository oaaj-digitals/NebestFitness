import { styled as s, keyframes } from "styled-components";

const loadinFades = keyframes`
    0% {
        
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const Card = s.div`

    width: 25rem;
    height: 34rem;
    font-size: 1.2rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background: linear-gradient(to bottom right, var(--color-red) 0%, transparent 100%);

    animation: ${loadinFades} 1s ease-in-out infinite alternate;
    animation-fill-mode: forwards;
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

const FeedCardSkeleton = () => {
	return (
		<Card>
			<Caption></Caption>
		</Card>
	);
};

export default FeedCardSkeleton;
