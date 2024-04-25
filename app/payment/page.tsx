import { Metadata } from "next";
import styles from "./PaymentPage.module.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nebestfitness.com'),
  title: "Payment"
};

const PaymentPage = () => {
  return (
    <main>
      <section className={styles.section}>
        <iframe
          src={"https://pay.sumup.com/b2c/QJK15S3K"}
          className={styles.iframe}
          allowFullScreen
          id="paySum" />
      </section>
    </main>
  );
};

export default PaymentPage;