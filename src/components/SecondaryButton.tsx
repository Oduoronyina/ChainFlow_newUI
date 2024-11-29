import { FunctionComponent } from "react";
import styles from "./SecondaryButton.module.css";

export type SecondaryButtonType = {
  className?: string;
  text?: string;
  iconRight?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  defaultLight?: boolean;
  defaultSmall?: boolean;
};

const SecondaryButton: FunctionComponent<SecondaryButtonType> = ({
  className = "",
  defaultLight = false,
  defaultSmall = true,
  text = "Browse products",
  iconRight = false,
  iconLeft = false,
}) => {
  return (
    <button
      className={[styles.secondaryButton, className].join(" ")}
      data-defaultLight={defaultLight}
      data-defaultSmall={defaultSmall}
    >
      {iconLeft && (
        <img
          className={styles.lineRoundedsearchIcon}
          alt=""
          src="/line-roundedsearch2.svg"
        />
      )}
      <div className={styles.buttonText}>{text}</div>
      {iconRight && (
        <img
          className={styles.lineRoundedarrowRight}
          alt=""
          src="/line-roundedarrow-right3.svg"
        />
      )}
    </button>
  );
};

export default SecondaryButton;
