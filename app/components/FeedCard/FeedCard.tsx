import Link from "next/link";
import styles from "./FeedCard.module.css";
import { Feed } from "../HomePage/Feeds/Feeds";
import Image from "next/image";

interface Props {
  feed: Feed;
}

const FeedCard = ({ feed }: Props) => {
  const caption = feed.caption.substring(0, 100);

  return (
    <Link className={`${styles.card} ${feed ? null : styles.loading}`} href={feed.permalink || feed.media_url} target="_blank" rel="noopener noreferrer">
      <Image
        src={feed.thumbnail_url || feed.media_url}
        alt=""
        loading="lazy"
        className={styles.img}
        width={720}
        height={1280}
      />
      <p className={styles.caption}>
        {feed.caption && caption + "..."}
      </p>
    </Link>
  );
};

export default FeedCard;