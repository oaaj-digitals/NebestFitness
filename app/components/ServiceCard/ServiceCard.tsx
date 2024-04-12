import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";
import { Service } from "@/app/utilis/services";

interface Props extends Service {
}

const ServiceCard = ({ title, image }: Props) => {
  const generatedLink = title.toLowerCase().replace(/\s/g, "_");

  return (
    <Link href={`/services/${generatedLink}`} className={styles.serviceCard}>
      <Image
        className={styles.serviceImg}
        src={image}
        title={title}
        alt={`${title} Image`}
      />
      <h4 className={styles.serviceTitle}>{title}</h4>
    </Link>
  );
};

export default ServiceCard;