import { FunctionComponent } from "react";
import styles from "./DropdownV4.module.css";

export type DropdownV4Type = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV4: FunctionComponent<DropdownV4Type> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv5, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarintegrationsIcon}
        loading="lazy"
        alt=""
        src="/sidebarintegrations.svg"
      />
      <div className={styles.linkTitle}>Integrations</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

export default DropdownV4;
