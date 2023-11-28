import { styled as s } from "styled-components";
import { ReactNode } from "react";

interface Props {
	id?: string;
	title?: string;
	children: ReactNode;
	height?: string;
	padding?: string;
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
	max-height:  ${({ height }: StyledComponentProps) =>
		height || "clac(100vh - 8rem)"};
	height: max-content;
    padding: ${({ $padding }: StyledComponentProps) =>
		$padding || "12rem 6rem 0rem"};
    display:flex;
    flex-direction: column;

	&:nth-of-type(2) {
		padding-top: 10rem;
	}
    
	&:last-of-type {
		padding-bottom: 7rem;
	}
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
	flexDirection,
}: Props) => {
	return (
		<SectionBox id={id} height={height} $padding={padding}>
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
