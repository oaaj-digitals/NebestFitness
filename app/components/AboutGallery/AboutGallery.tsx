import styles from "./AboutGallery.module.css";

import thumb1 from "../../assets/images/MMV-thumb1.png";
import thumb2 from "../../assets/images/MMV-thumb2.png";
import thumb3 from "../../assets/images/MMV-thumb3.png";
import thumb4 from "../../assets/images/MMV-thumb4.png";
import thumb5 from "../../assets/images/MMV-thumb5.png";
import thumb6 from "../../assets/images/MMV-thumb6.png";

const AboutGallery = () => {
  return (
    <section className={styles.section}>
      <div className='titleBox left'>
        <div>
          <h3 className={`secondary-heading ${styles.heading}`}>Behind the Scenes: See me in Action</h3>
          <div className="underline"></div>
        </div>
      </div>

      <div className={styles.container}>
        <video controls preload="none" className={styles.video} poster={thumb6.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (6).mp4"} />
        </video>

        <video controls preload="none" className={styles.video} poster={thumb1.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (1).mp4"} />
        </video>

        <video controls preload="none" className={styles.video} poster={thumb2.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (2).mp4"} />
        </video>

        <video controls preload="none" className={styles.video} poster={thumb5.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (5).mp4"} />
        </video>

        <video controls preload="none" className={styles.video} poster={thumb3.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (3).mp4"} />
        </video>

        <video controls preload="none" className={styles.video} poster={thumb4.src}>
          <source type="video/mp4" src={"/assets/videos/MMV (4).mp4"} />
        </video>
      </div>
    </section>
  );
};

export default AboutGallery;