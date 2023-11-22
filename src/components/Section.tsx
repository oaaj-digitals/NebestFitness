import { styled as s } from "styled-components";
import { ReactNode } from "react";

interface Props {
	id?: string;
	title?: string;
	children: ReactNode;
	height?: string;
	padding?: string;
	snapScroll?: boolean;
	flexDirection?: string;
}

interface StyledComponentProps {
	height?: string;
	scrollSnapAlign?: boolean;
	$padding?: string;
	flexDirection?: string;
}

const SectionBox = s.section<StyledComponentProps>`
    width: 100%;
	height: ${({ height }: StyledComponentProps) => (height ? height : "100vh")};
	max-height: max-content;
	scroll-snap-align: ${({ scrollSnapAlign }: StyledComponentProps) =>
		scrollSnapAlign === false ? "none" : "start"};
    padding: ${({ $padding }: StyledComponentProps) =>
		$padding ? $padding : "4rem 6rem"};
    display:flex;
    flex-direction: column;
    
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

const SectionMain = s.div<StyledComponentProps>`
    width:100%;
	height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
	flex-direction: ${({ flexDirection }: StyledComponentProps) =>
		flexDirection !== "" || null ? flexDirection : "row"};

`;

const Section = ({
	id,
	title,
	children,
	height,
	padding,
	snapScroll,
	flexDirection,
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

			<SectionMain flexDirection={flexDirection}>{children}</SectionMain>
		</SectionBox>
	);
};

export default Section;
