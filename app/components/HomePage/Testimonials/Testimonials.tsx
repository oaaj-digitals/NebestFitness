import TestimonialCard from '../../TestimonialCard/TestimonialCard';
import styles from "./Testimonials.module.css";


const Testimonials = () => {
  return (
    <section
      className={styles.section}
      id="testimonials"
    >
      <div className='titleBox left'>
        <div>
          <h3 className='secondary-heading'>Members Success Stories</h3>
          <div className="underline"></div>
        </div>
      </div>

      <p>
        Hear what some of our clients have to say about their
        NebestFitness experience. Join the community that celebrates
        success, supports one another, and thrives together.
      </p>

      <div className={styles.container}>
        <TestimonialCard>
          <p>
            Since I&apos;ve started using nebestfitness, I look
            forward to my coaching session each week. The
            improvements I&apos;ve made have come from clear
            instructions with a particular emphasis on great
            technique, to build a solid foundation to work from.
            I can already see how much progress I&apos;ve made from
            working with Emmanuel and am looking forward to
            seeing where I can take it with his help.
          </p>
          <p>- James</p>
        </TestimonialCard>

        <TestimonialCard>
          <p>
            Emmy is a professional and meticulous coach. In the
            first month of his training, my muscles grew by 6kg,
            thanks to Emmy&apos;s flexible and targeted training.
            Emmy has a thorough understanding of human muscles,
            which makes his private courses very efficient.
          </p>
          <p>- Jackson</p>
        </TestimonialCard>

        <TestimonialCard>
          <p>
            Emmanuel&apos;s dynamic approach to fitness is truly
            refreshing. His customized workouts are designed to
            be engaging and varied, ensuring that every session
            brings something new to the table. From strength
            training to cardio and flexibility exercises, He
            blends different elements, keeping the routine
            exciting and effective for me.
          </p>
          <p>- Aliff</p>
        </TestimonialCard>

        <TestimonialCard>
          <p>
            As a combat instructor, Emmanuel&apos;s expertise in
            martial arts has transformed my skills
            significantly. The focus on speed, body
            coordination, and overall technique has elevated my
            performance to new heights. His motivational
            coaching style inspires me to give my best in every
            session. I can&apos;t believe how far I&apos;ve come since I
            started. I feel i am better prepared to face the
            world thanks to his guidance and support.
          </p>
          <p>- George</p>
        </TestimonialCard>
      </div>
    </section>
  );
};

export default Testimonials;