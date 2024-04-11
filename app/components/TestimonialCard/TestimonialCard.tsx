import { ReactNode } from "react";
import styles from "./TestimonialCard.module.css";

interface Props {
  children: ReactNode;
}

const TestimonialCard = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default TestimonialCard;