import Btn from "../../Btn/Btn";
import styles from "./HeroSection.module.css";

const headerBtnStyle = {
  width: "max-content",
  marginTop: "2rem",
  fontSize: "2rem",
};

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.heading} primary-heading`}>Unleash Your Full Potential</h1>
        <div className="underline"></div>
        <p>
          Welcome to NebestFitness, Your destination for
          transformative fitness experience. Embark on a journey of
          welness and strength with us.
        </p>
        <Btn
          style={headerBtnStyle}
          link="https://pdfbwss34k5.typeform.com/to/Cf2YXHll?typeform-source=linktr.ee"
        >
          Start Today
        </Btn>
      </div>
    </section>
  );
};

export default HeroSection;