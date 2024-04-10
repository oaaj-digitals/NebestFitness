import { Service } from "@/app/utilis/services";
import styles from "./ServicePage.module.css";
import Image from "next/image";


interface Props {
  service: Service;
}

const ServicePageContent = ({
  service: { title, image }
}: Props) => {
  return (
    <>
      <section className={styles.heroSection}>
        <Image src={image} alt={title} className={styles.heroSectionImg} />
        <h1 className={`${styles.heading} secondary-heading`}>{title}</h1>
      </section>
    </>
  );
};

export default ServicePageContent; 