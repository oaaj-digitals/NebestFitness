import Link from 'next/link';
import styles from "./AboutAdditionals.module.css";

const AboutAdditionals = () => {
  return (
    <section className={styles.section}>
      <div className='titleBox left'>
        <div>
          <h3 className='secondary-heading'>Ready to unlock your potential?</h3>
          <div className="underline"></div>
        </div>
      </div>

      <div className={styles.textBox}>
        <p>
          I share daily fitness tips, workout routines, and inspirational stories on my Instagram account. Get a glimpse into my training methods, see the transformations of my clients, and discover how I can help you achieve your goals.
        </p>

        <p>
          Dive deeper into fitness on Instagram:
          <Link className={styles.link} href={'https://www.instagram.com/nebestfitness/'} target='_blank'>@NebestFitness</Link>,
          You can get a peek into my personal life on:
          <Link href={'https://www.instagram.com/emmytrend/'} className={styles.link} target='_blank'>@emmytrend</Link> .
        </p>


        <p>
          Beyond the inspiration, I offer personalized training plans to take your results to the next level! Whether you&apos;re aiming for increased muscle mass, weight loss, or mastering a new skill, I have a program designed to fit your needs and lifestyle.
          <Link className={styles.link} href={'/#services'}>Get Your Personalized Plan! ↗</Link>
        </p>
      </div>
    </section>
  );
};

export default AboutAdditionals;