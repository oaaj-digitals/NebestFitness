import MerchDisplayCard from "@/app/components/MerchDisplayCard/MerchDisplayCard";
import styles from "./styles.module.css";
import merchs from "@/app/utilis/merch";

const ShopPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>

        {
          merchs.map(
            (merch, index) =>
              <MerchDisplayCard
                displayimg={merch.displayimg}
                title={merch.title}
                price={merch.price}
                gender={merch.gender}
                key={index}
              />
          )
        }
      </section>
    </main>
  );
};

export default ShopPage;