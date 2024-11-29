import { FunctionComponent } from "react";
import styles from "./DropdownV3.module.css";

export type DropdownV3Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV3: FunctionComponent<DropdownV3Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv4, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarcoinIcon}
        loading="lazy"
        alt=""
        src="/sidebarcoin.svg"
      />
      <div className={styles.linkTitle}>Pricing</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV3;
