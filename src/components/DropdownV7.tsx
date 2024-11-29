import { FunctionComponent } from "react";
import styles from "./DropdownV7.module.css";

export type DropdownV7Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV7: FunctionComponent<DropdownV7Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv8, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarwebflowIcon}
        alt=""
        src="/sidebarwebflow.svg"
      />
      <div className={styles.linkTitle}>Design pages</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV7;
