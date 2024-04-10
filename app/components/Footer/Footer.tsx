import Image from 'next/image';
import Link from 'next/link';
import { faInstagram, faWhatsapp, faXTwitter, faTiktok, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/nebest-full-logo.svg';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/#header">Home</Link>
        <Link href="/#about-us">About Us</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#gallery">Gallery</Link>
        <Link href="/#testimonials">Testimonials</Link>
        <Link href="/#contact-us">Contact Us</Link>
        <Link href="/#blog">Blog</Link>
      </nav>

      <div className={styles.socials}>
        <Link
          href="https://instagram.com/nebestfitness"
          target="_blank"
          aria-label="Link to Instagram account"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          href="https://wa.me/message/JX6TOLTPPD26J1"
          target="_blank"
          aria-label="Link to Whatsapp account"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
        <Link
          href="https://x.com/nebestfitness"
          target="_blank"
          aria-label="Link to X(Twitter) account"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link
          href="https://tiktok.com/@nebestfitness"
          target="_blank"
          aria-label="Link to TikTok account"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
        <Link
          href="https://facebook.com/profile.php?id=100078758541400"
          target="_blank"
          aria-label="Link to Facebook page"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link
          href="https://www.youtube.com/@NebestFitness"
          target="_blank"
          aria-label="Link to Youtube page"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
      </div>

      <p className={styles.copyRight}>2023 &copy; Copyright</p>

      <Link href="/">
        <Image src={Logo} alt="NebestFitness Logo" className={styles.logo} />
      </Link>
    </footer>
  );
};

export default Footer;