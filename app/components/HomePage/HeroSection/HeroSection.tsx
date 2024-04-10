import { faInstagram, faWhatsapp, faXTwitter, faTiktok, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../../Btn/Btn";
import styles from "./HeroSection.module.css";
import Link from "next/link";

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

      <div className={styles.socials}>
        <Link
          href="https://instagram.com/nebestfitness"
          target="_blank"
          aria-label="Link to Instagram account"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </Link>
        <Link
          href="https://wa.me/message/JX6TOLTPPD26J1"
          target="_blank"
          aria-label="Link to Whatsapp account"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </Link>
        <Link
          href="https://x.com/nebestfitness"
          target="_blank"
          aria-label="Link to X(Twitter) account"
        >
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </Link>
        <Link
          href="https://tiktok.com/@nebestfitness"
          target="_blank"
          aria-label="Link to TikTok account"
        >
          <FontAwesomeIcon icon={faTiktok} size="xl" />
        </Link>
        <Link
          href="https://facebook.com/profile.php?id=100078758541400"
          target="_blank"
          aria-label="Link to Facebook page"
        >
          <FontAwesomeIcon icon={faFacebookF} size="xl" />
        </Link>
        <Link
          href="https://www.youtube.com/@NebestFitness"
          target="_blank"
          aria-label="Link to Youtube page"
        >
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;