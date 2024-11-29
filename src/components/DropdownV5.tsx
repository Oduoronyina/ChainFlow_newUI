import { FunctionComponent } from "react";
import styles from "./DropdownV5.module.css";

export type DropdownV5Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV5: FunctionComponent<DropdownV5Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv6, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebargearIcon}
        loading="lazy"
        alt=""
        src="/sidebargear.svg"
      />
      <div className={styles.linkTitle}>Settings</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV5;
