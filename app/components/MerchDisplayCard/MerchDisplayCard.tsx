import Image, { StaticImageData } from "next/image";
import styles from "./MerchDisplayCard.module.css";
import hoodie from "../../assets/images/Nebestfitness Premium Hoodie.png";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Merch } from "@/app/utilis/merch";

interface Props extends Merch {
}

const MerchDisplayCard = (
  { displayimg, title, price, gender }: Props
) => {

  const generatedLink = title.toLowerCase().replace(/\s/g, "_");

  return (
    <div className={styles.card}>
      <div className={`${styles.imgBox}`}>
        <Image
          className={`${styles.img}`}
          src={displayimg || hoodie}
          alt={`NebestFitness ${title?.toUpperCase}`}
        />
      </div>

      <div className={styles.linkContainer}>
        <Link href={`/shop/${generatedLink}`} className={`${styles.link}`}>
          <div className={styles.linkDiv}>
            <FontAwesomeIcon icon={faArrowRight} className={`${styles.linkIcon}`} />
          </div>
        </Link>
      </div>

      <div className={styles.textDetails}>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.right}>
          <p className={styles.gender}>{gender}</p>
          <p className={styles.price}>£{price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default MerchDisplayCard;