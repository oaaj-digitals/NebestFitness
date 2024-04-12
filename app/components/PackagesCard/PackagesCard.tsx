import { Packages } from "@/app/utilis/services";
import styles from "./PackagesCard.module.css";


const PackagesCard = ({ title, benefits, amount }: Packages) => {
  return (
    <div className={styles.packagesCard}>
      <h3 className={styles.title}>{title}</h3>
      {benefits && <p dangerouslySetInnerHTML={{ __html: benefits }}>
      </p>}
      <p dangerouslySetInnerHTML={{ __html: amount }} className={styles.amt}></p>
    </div>
  );
};

export default PackagesCard;