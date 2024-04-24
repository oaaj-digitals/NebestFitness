import Image from "next/image";
import meetMeImage from "../../assets/images/emma.png";
import styles from "./MeetMe.module.css";
import Btn from "../Btn/Btn";

interface Props {
  btn?: boolean;
}

const MeetMe = ({ btn }: Props) => {
  return (
    <section id='meetMe' className={styles.section}>
      <div className={styles.textContainer}>
        <div className={styles.headingBox} >
          <h2 className={`secondary-heading`}>Meet Emmanuel  - Director / Head Coach</h2>
          <div className="underline"></div>
        </div>
        <p className={styles.text}>
          <span>
            Imagine a life where strength and confidence flow through you and your body becomes a powerful tool, allowing you to achieve anything you set your mind to. That's the transformative power of fitness.
            My journey began at a young age in West Africa, fueled by the discipline of taekwondo. This ignited a passion for health and fitness that has only grown stronger over time. My experience training with the military in martial arts further honed my skills as I hold 3 blackbelts in taekwondo, Judo & kyokushin karate.
          </span>
          <span>
            Now, I leverage this knowledge to develop techniques and personalized approaches to help you reach your fitness goals. Whether you seek increased muscle mass, weight loss, sport-specific training, functional movement, or self-defense skills, I can guide you on your path.
          </span>
          <span>

            Building on my own transformation, my mission is to empower others to achieve theirs through the power of fitness.
          </span>
        </p>

      </div>

      <div className={styles.imgDiv}>
        <svg viewBox="0 0 542 682" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="footerClipPath" clipPathUnits="objectBoundingBox">
            <path d="M0.255,0 H1 L0.745,1 H0 L0.255,0" />
          </clipPath>

        </svg>
        <Image src={meetMeImage} alt="" className={styles.img} />

      </div >

      {
        btn &&
        <div className={styles.btnBox}>
          <Btn
            link="/about-us#meetMe"
          >
            View More
          </Btn>
        </div>
      }
    </section>
  );
};

export default MeetMe;