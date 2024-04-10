import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Btn.module.css";

interface Props {
  children: ReactNode;
  link?: string;
  style?: {};
  blank?: boolean;
}

const Btn = ({ children, link, style, blank }: Props) => {
  return (
    <Link
      style={style}
      href={link ? link : ""}
      target={blank ? "_blank" : "_self"}
      className={styles.Btn}>

      <div className={styles.bg}></div>
      {children}

    </Link>
  );
};

export default Btn;