import { FunctionComponent } from "react";
import styles from "./DropdownV6.module.css";

export type DropdownV6Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV6: FunctionComponent<DropdownV6Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv7, className].join(" ")} data-open={open1}>
      <img className={styles.sidebartoolsIcon} alt="" src="/sidebartools.svg" />
      <div className={styles.linkTitle}>Utility pages</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV6;
