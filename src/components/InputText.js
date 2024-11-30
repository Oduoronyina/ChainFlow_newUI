import PrimaryButton from "./PrimaryButton";
import PropTypes from "prop-types";
import styles from "./InputText.module.css";

const InputText = ({
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

InputText.propTypes = {
  className: PropTypes.string,
  button: PropTypes.bool,
  placeholder: PropTypes.string,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,

  /** Variant props */
  defaultSmall: PropTypes.bool,
};

export default InputText;
