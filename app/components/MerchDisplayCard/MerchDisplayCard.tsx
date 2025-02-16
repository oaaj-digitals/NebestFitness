import Image, { StaticImageData } from "next/image";
import styles from "./MerchDisplayCard.module.css";
import hoodie from "../../assets/images/Nebestfitness Premium Hoodie.png";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  img?: string | StaticImageData;
  alt?: string;
  price?: number;
  genders?: string;
}

const MerchDisplayCard = ({ img, alt }: Props) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imgBox}`}>
        <Image
          className={`${styles.img}`}
          src={img || hoodie}
          alt={alt ? alt : ""}
        />
      </div>

      <div className={styles.linkContainer}>
        <Link href={"./premium-hoodie"} className={`${styles.link}`}>
          <div className={styles.linkDiv}>
            <FontAwesomeIcon icon={faArrowRight} className={`${styles.linkIcon}`} />
          </div>
        </Link>
      </div>

      <div className={styles.textDetails}>

        <h2 className={styles.title}>Premium Hoodie</h2>

        <div className={styles.right}>
          <p className={styles.gender}>Unisex</p>
          <p className={styles.price}>£45.00</p>
        </div>
      </div>
    </div>
  );
};

export default MerchDisplayCard;