import PropTypes from "prop-types";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({
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

SecondaryButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,

  /** Variant props */
  defaultLight: PropTypes.bool,
  defaultSmall: PropTypes.bool,
};

export default SecondaryButton;
