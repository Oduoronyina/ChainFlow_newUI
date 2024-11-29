import { FunctionComponent } from "react";
import styles from "./Select.module.css";

export type SelectType = {
  className?: string;
  placeholder?: string;
  iconRight?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  defaultSmall?: string;
};

const Select: FunctionComponent<SelectType> = ({
  className = "",
  defaultSmall = "Small",
  placeholder = "This month",
  iconRight = true,
  iconLeft = false,
}) => {
  return (
    <div
      className={[styles.select, className].join(" ")}
      data-defaultSmall={defaultSmall}
    >
      <div className={styles.inputLeft}>
        {iconLeft && (
          <img
            className={styles.inputIconLeft}
            alt=""
            src="/input-icon-left1.svg"
          />
        )}
        <div className={styles.inputPlaceholder}>{placeholder}</div>
      </div>
      {iconRight && (
        <img
          className={styles.inputIconLeft1}
          alt=""
          src="/input-icon-left-1.svg"
        />
      )}
    </div>
  );
};

export default Select;
