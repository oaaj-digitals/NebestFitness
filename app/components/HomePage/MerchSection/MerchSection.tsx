import Image from "next/image";
import styles from "./MerchSection.module.css";
import hoodiePic from "../../../assets/images/merchs/Nebestfitness_Premium_Hoodie_Front.png";
import shirt1 from "../../../assets/images/merchs/NebestFitness_Legacy_Shirt_Front.png";
import shirt2 from "../../../assets/images/merchs/Nebestfitness_LightWeight_Shirt_Back.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MerchSection = () => {
  return (
    <section id='merch' className={styles.section}>
      <div className={styles.container}>
        <h3 className={`secondary-heading ${styles.heading}`}>
          Introducing Our <br />
          Fitness Apparel Collection
        </h3>

        <p className={styles.des}>
          We&rsquo;re excited to introduce our brand-new Fitness Apparel Collection-designed for performance, comfort and style! Whether you&rsquo;re hitting the gym, training outdoor or just looking for casual activewear, our collection is made to complement your active lifstyle.
        </p>
      </div>

      <div className={styles.container2}>
        <div className={styles.imgContainer}>
          <div className={`${styles.imgBox} ${styles.txtBox}`}>
            <p className={`${styles.text} ${styles.imgBg}`}>
              Explore our range of high-quality fitness clothing, including hoodies,
              t-shirts, and face-cap, all crafted for durability and maximum comfort. Represent your fitness journey with style and confidence.
            </p>
          </div>

          <div className={`${styles.imgBox} ${styles.imgBg} ${styles.hoodieImg}`}>
            <Image src={hoodiePic} alt={"NebestFitness Premium Hoodie"} />
          </div>

          <div className={`${styles.imgBox} ${styles.imgBg} ${styles.shirtImg1} ${styles.shirtImg}`}>
            <Image src={shirt1} alt={"NebestFitness Legacy Shirt"} />
          </div>

          <div className={`${styles.imgBox} ${styles.imgBg} ${styles.shirtImg2} ${styles.shirtImg}`}>
            <Image src={shirt2} alt={"NebestFitness LightWeight Shirt"} />
          </div>
        </div>

        <Link href={"/shop"} className={`${styles.link}`}>
          Visit Our Store
          <FontAwesomeIcon size="1x" icon={faArrowRight} className={`${styles.linkIcon}`} />
        </Link>
      </div>
    </section>
  );
};

export default MerchSection;