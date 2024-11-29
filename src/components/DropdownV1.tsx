import { FunctionComponent } from "react";
import styles from "./DropdownV1.module.css";

export type DropdownV1Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV1: FunctionComponent<DropdownV1Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv2, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarstarIcon}
        loading="lazy"
        alt=""
        src="/sidebarstar.svg"
      />
      <div className={styles.linkTitle}>Features</div>
      <img
        className={styles.sidebarchevronRightIcon}
        loading="lazy"
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV1;
