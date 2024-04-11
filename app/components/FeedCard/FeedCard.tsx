import Link from "next/link";
import styles from "./FeedCard.module.css";
import { Feed } from "../HomePage/Feeds/Feeds";

interface Props {
  feed: Feed;
}

const FeedCard = ({ feed }: Props) => {
  const caption = feed.caption.substring(0, 100);

  return (
    <Link className={`${styles.card} ${feed ? null : styles.loading}`} href={feed.permalink || feed.media_url} target="_blank" rel="noopener noreferrer">
      <img
        src={feed.thumbnail_url || feed.media_url}
        alt=""
        loading="lazy"
        className={styles.img}
      />
      <p className={styles.caption}>
        {feed.caption && caption + "..."}
      </p>
    </Link>
  );
};

export default FeedCard;