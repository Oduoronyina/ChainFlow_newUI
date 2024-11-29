import { FunctionComponent } from "react";
import styles from "./DropdownV2.module.css";

export type DropdownV2Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV2: FunctionComponent<DropdownV2Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv3, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebaruserIcon}
        loading="lazy"
        alt=""
        src="/sidebaruser.svg"
      />
      <div className={styles.linkTitle}>Users</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV2;
