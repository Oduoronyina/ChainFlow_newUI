import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonType = {
  className?: string;
  text?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  lineRoundedSearch?: string;
  lineRoundedArrowRight?: string;

  /** Variant props */
  defaultSmall?: boolean;
  defaultWhite?: boolean;

  /** Style props */
  primaryButtonAlignSelf?: CSSProperties["alignSelf"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  className = "",
  defaultSmall = true,
  defaultWhite = false,
  text = "Get design",
  iconRight = true,
  iconLeft = false,
  primaryButtonAlignSelf,
  lineRoundedSearch,
  lineRoundedArrowRight,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: primaryButtonAlignSelf,
    };
  }, [primaryButtonAlignSelf]);

  return (
    <button
      className={[styles.root, className].join(" ")}
      data-defaultSmall={defaultSmall}
      data-defaultWhite={defaultWhite}
      style={primaryButtonStyle}
    >
      {iconLeft && (
        <img
          className={styles.lineRoundedsearchIcon}
          alt=""
          src={lineRoundedSearch}
        />
      )}
      <b className={styles.buttonText}>{text}</b>
      {iconRight && (
        <img
          className={styles.lineRoundedarrowRight}
          alt=""
          src={lineRoundedArrowRight}
        />
      )}
    </button>
  );
};

export default PrimaryButton;
