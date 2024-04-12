import { Media } from '@/app/utilis/services';
import Image from 'next/image';
import styles from "./ServiceMedia.module.css";

interface Props extends Media {
  title: string;
  id: number;
}

const ServiceMedia = ({ src, type, thumbnail, title, id }: Props) => {
  return (
    (
      type == "image" &&
      <Image
        className={styles.media}
        src={src}
        alt={`${title} Image ${id + 1}`}
      />
    ) ||
    (
      type == "video" &&
      <video controls
        preload="none"
        className={styles.media}
        poster={thumbnail}
      >
        <source type="video/mp4" src={src.toString()} />
      </video>
    )
  );
};

export default ServiceMedia;