import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
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
  const primaryButtonStyle = useMemo(() => {
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

PrimaryButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,
  lineRoundedSearch: PropTypes.string,
  lineRoundedArrowRight: PropTypes.string,

  /** Variant props */
  defaultSmall: PropTypes.bool,
  defaultWhite: PropTypes.bool,

  /** Style props */
  primaryButtonAlignSelf: PropTypes.string,
};

export default PrimaryButton;
