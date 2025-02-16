import MerchDisplayCard from "@/app/components/MerchDisplayCard/MerchDisplayCard";
import styles from "./styles.module.css";

const ShopPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <MerchDisplayCard />
        <MerchDisplayCard />
        <MerchDisplayCard />
        <MerchDisplayCard />
        <MerchDisplayCard />
        <MerchDisplayCard />
      </section>
    </main>
  );
};

export default ShopPage;