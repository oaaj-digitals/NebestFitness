import Image from "next/image";
import styles from "./AboutSection.module.css";
import aboutImage from "../../assets/images/IMG_1377.jpg";

const AboutSection = () => {
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bg}></div>
        <div className={styles.imgDiv}>
          <svg viewBox="0 0 542 682" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="footerClipPath" clipPathUnits="objectBoundingBox">
              <path d="M0.255,0 H1 L0.745,1 H0 L0.255,0" />
            </clipPath>

          </svg>
          <Image src={aboutImage} alt="" className={styles.img} />

        </div >

        <div className={styles.textContainer}>
          <div className={styles.headingBox}>
            <h2 className={`${styles.heading} primary-heading`}>About Us</h2>
            <div className="underline"></div>
          </div>
          <p className={styles.text}>
            <span>
              At NebestFitness, we believe in the power of
              personalized fitness.
            </span>
            <span>
              We are passionate and dedicated to guiding you
              towards your fitness goals with a tailored approach
              that considers your unique needs and aspirations.
            </span>
            <span>
              We are not just a fitness organization, we are your
              partner in health.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;