import feedStyles from "../FeedCard/FeedCard.module.css";
import styles from "./FeedCardSkeleton.module.css";

interface Props {
  error: string;
  isLoading: boolean;
}


const FeedCardSkeleton = ({ error, isLoading }: Props) => {
  return (
    <div className={`${feedStyles.card} ${styles.card}  ${isLoading && styles.loading}`}>
      {error &&
        "Oops! Something went wrong. Apologies for the inconvenience."}
      <p></p>
    </div>
  );
};

export default FeedCardSkeleton;