import styles from "./PaymentPage.module.css";

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