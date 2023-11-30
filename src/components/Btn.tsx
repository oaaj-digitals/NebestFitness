import { ReactNode } from "react";
import { styled as s } from "styled-components";
import { breakpoints } from "../services/design-breakpoints";

interface Props {
	children: ReactNode;
	link?: string;
	style?: {};
}

const Button = s.a`
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 3rem;
    overflow: hidden;

    & * {
        color: inherit;
    }

    &:hover {
        color: var(--color-white) !important;
    }

    &:hover div {
        right: -15%;
    }

`;

const Bg = s.div`
    display: block;
    width: 130%;
    height: 100%;
    background: var(--color-red);

    position: absolute;
    top: 0;
    right: 60%;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);

    transition: all .3s ease-in;
    
    @media (max-width: ${breakpoints.tabPort}) {
        right: 0%;
	}
`;

const Btn = ({ children, link, style }: Props) => {
	return (
		<Button style={style} href={link ? link : ""} target="_blank">
			<Bg />
			{children}
		</Button>
	);
};

export default Btn;
