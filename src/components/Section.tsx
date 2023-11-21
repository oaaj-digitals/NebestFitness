import { styled as s } from "styled-components";
import { ReactNode } from "react";

interface Props {
	id?: string;
	title?: string;
	children: ReactNode;
	height?: string;
	padding?: string;
	snapScroll?: boolean;
}

const SectionBox = s.section<{
	height?: string;
	scrollSnapAlign?: boolean;
	$padding?: string;
}>`
    width: 100%;
	height: ${(props) => (props.height ? props.height : "100vh")};
	max-height: max-content;
	scroll-snap-align: ${(props) =>
		props.scrollSnapAlign === false ? "none" : "start"};
    padding: ${(props) => (props.$padding ? props.$padding : "4rem 6rem")};
    display:flex;
    flex-direction:column;
    
`;

const SectionTitleBox = s.div`
	flex-shrink: 0;
    align-self:flex-start;
`;

const SectionTitle = s.h2`
    font: var(--secondary-heading);
    color: var(--color-white);
    line-height: .9;
`;

const SectionMain = s.div`
    width:100%;
	height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;

const Section = ({
	id,
	title,
	children,
	height,
	padding,
	snapScroll,
}: Props) => {
	return (
		<SectionBox
			id={id}
			height={height}
			scrollSnapAlign={snapScroll}
			$padding={padding}
		>
			{title != null || "" ? (
				<SectionTitleBox>
					<SectionTitle>{title}</SectionTitle>
					<div className="underline"></div>
				</SectionTitleBox>
			) : null}

			<SectionMain>{children}</SectionMain>
		</SectionBox>
	);
};

export default Section;
