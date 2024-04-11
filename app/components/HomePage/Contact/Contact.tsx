import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact-us" className={styles.section}>

      <div className={styles.contact}>
        <p>
          <span>Phone:</span> +44(0) 7501 080466
        </p>
        <p>
          <span>Email:</span> NebestFitness@gmail.com
        </p>
      </div>

      <div className={styles.titleBox}>
        <h3 className={`${styles.title} secondary-heading`}>Contact Us</h3>
        <div className="underline"></div>
      </div>

    </section>
  );
};

export default Contact;