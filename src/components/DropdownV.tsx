import { FunctionComponent } from "react";
import LinksItems from "./LinksItems";
import styles from "./DropdownV.module.css";

export type DropdownVType = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const DropdownV: FunctionComponent<DropdownVType> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.dropdownv1, className].join(" ")} data-open={open1}>
      <div className={styles.linksItems}>
        <img className={styles.sidebarhomeIcon} alt="" src="/sidebarhome.svg" />
        <a className={styles.linkTitle}>Dashboard</a>
        <img
          className={styles.sidebarchevronDownIcon}
          alt=""
          src="/sidebarchevron-down.svg"
        />
      </div>
      <div className={styles.linksSet}>
        <LinksItems select={false} titleSection="Reports" />
        <LinksItems select={false} titleSection="Products" />
        <LinksItems select titleSection="Delivery" />
      </div>
    </div>
  );
};

export default DropdownV;
