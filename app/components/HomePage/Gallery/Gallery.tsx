import styles from "./Gallery.module.css";

import thumbnail1 from "../../../assets/images/vThumb (2).png";
import gItem2 from "../../../assets/images/Image-1.png";
import thumbnail2 from "../../../assets/images/vThumb (3).png";
import thumbnail3 from "../../../assets/images/vThumb (1).png";
import thumbnail4 from "../../../assets/images/vThumb (4).png";
import gItem7 from "../../../assets/images/Image-2.png";
import thumbnail5 from "../../../assets/images/vThumb (5).png";
import Image from "next/image";
import thumbnail6 from "../../../assets/images/vThumb (6).png";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.section}>

      <div className='titleBox left'>
        <div>
          <h3 className='secondary-heading'>Explore Our Fitness Gallery</h3>
          <div className="underline"></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.gridItem} ${styles.item1}`}>
          <video controls preload="none" poster={thumbnail1.src}>
            <source type="video/mp4" src={"/assets/videos/GVTS-1.mp4"} />
          </video>
        </div>

        <div className={`${styles.gridItem} ${styles.item2}`}>
          <Image src={gItem2} alt="" loading="lazy" />
        </div>

        <div className={`${styles.gridItem} ${styles.item3}`}>
          <video controls preload="none" poster={thumbnail6.src}>
            <source type="video/mp4" src={"/assets/videos/video-3.mp4"} />
          </video>
        </div>

        <div className={`${styles.gridItem} ${styles.item4}`}>
          <video controls preload="none" poster={thumbnail2.src}>
            <source type="video/mp4" src={"/assets/videos/GVTS-2.mp4"} />
          </video>
        </div>

        <div className={`${styles.gridItem} ${styles.item5}`}>
          <video controls preload="none" poster={thumbnail3.src}>
            <source type="video/mp4" src={"/assets/videos/video-1.mp4"} />
          </video>
        </div>

        <div className={`${styles.gridItem} ${styles.item6}`}>
          <video controls preload="none" poster={thumbnail4.src}>
            <source type="video/mp4" src={"/assets/videos/GVTS-3.mp4"} />
          </video>
        </div>

        <div className={`${styles.gridItem} ${styles.item7}`}>
          <Image src={gItem7} alt="" loading="lazy" />
        </div>

        <div className={`${styles.gridItem} ${styles.item8}`}>
          <video controls preload="none" poster={thumbnail5.src}>
            <source type="video/mp4" src={"/assets/videos/GVTS-5.mp4"} />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Gallery;