import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./InputText.module.css";

export type InputTextType = {
  className?: string;
  button?: boolean;
  placeholder?: string;
  iconRight?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  defaultSmall?: boolean;
};

const InputText: FunctionComponent<InputTextType> = ({
  className = "",
  defaultSmall = true,
  button = false,
  placeholder = "Search for...",
  iconRight = false,
  iconLeft = true,
}) => {
  return (
    <div
      className={[styles.inputText, className].join(" ")}
      data-defaultSmall={defaultSmall}
    >
      <div className={styles.inputLeft}>
        {iconLeft && (
          <img
            className={styles.inputIconLeft}
            alt=""
            src="/input-icon-left.svg"
          />
        )}
        <a className={styles.inputPlaceholder}>{placeholder}</a>
      </div>
      {button && (
        <PrimaryButton
          defaultSmall
          defaultWhite={false}
          text="Default"
          iconRight={false}
          iconLeft={false}
          primaryButtonAlignSelf="unset"
          lineRoundedSearch="/line-roundedsearch1.svg"
          lineRoundedArrowRight="/line-roundedarrow-right1.svg"
        />
      )}
      {iconRight && (
        <img
          className={styles.inputIconLeft1}
          alt=""
          src="/input-icon-left.svg"
        />
      )}
    </div>
  );
};

export default InputText;
