import { styled as s } from "styled-components";
import Section from "./Section";

const Container = s.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    gap: 1rem;

`;

const IntroText = s.p`
    flex-shrink: 0;
`;

const TestimonialsBox = s.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    // background: blue;

`;

const TestimonialCard = s.div`
    width: calc(80vw/4);
    height: max-content;
    padding: 2rem;
    background: linear-gradient(to bottom, var(--color-red), transparent );
    font-size: 1.2rem !important;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Testimonials = () => {
	return (
		<Section
			height="80vh"
			title="Members Success Stories"
			id="testimonials"
		>
			<Container>
				<IntroText>
					Hear what some of our clients have to say about their
					NebestFitness experience. Join the community that celebrates
					success, supports one another, and thrives together.
				</IntroText>

				<TestimonialsBox>
					<TestimonialCard>
						<p>
							Since I’ve started using nebestfitness, I look
							forward to my coaching session each week. The
							improvements I’ve made have come from clear
							instructions with a particular emphasis on great
							technique, to build a solid foundation to work from.
							I can already see how much progress I’ve made from
							working with Emmanuel and am looking forward to
							seeing where I can take it with his help.
						</p>
						<p>- Anonymous</p>
					</TestimonialCard>

					<TestimonialCard>
						<p>
							Emmy is a professional and meticulous coach. In the
							first month of his training, my muscles grew by 6kg,
							thanks to Emmy's flexible and targeted training.
							Emmy has a thorough understanding of human muscles,
							which makes his private courses very efficient.
						</p>
						<p>- Jackson</p>
					</TestimonialCard>

					<TestimonialCard>
						<p>
							Emmanuel’s dynamic approach to fitness is truly
							refreshing. His customized workouts are designed to
							be engaging and varied, ensuring that every session
							brings something new to the table. From strength
							training to cardio and flexibility exercises, He
							blends different elements, keeping the routine
							exciting and effective for me.
						</p>
						<p>- James</p>
					</TestimonialCard>

					<TestimonialCard>
						<p>
							As a combat instructor, Emmanuel’s expertise in
							martial arts has transformed my skills
							significantly. The focus on speed, body
							coordination, and overall technique has elevated my
							performance to new heights. He motivational coaching
							style inspires me to give my best in every session.
							I can’t believe how far I’ve come since I started. I
							feel i am better prepared to face the world thanks
							to his guidance and support.
						</p>
						<p>- Anonymous</p>
					</TestimonialCard>
				</TestimonialsBox>
			</Container>
		</Section>
	);
};

export default Testimonials;
