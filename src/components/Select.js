import PropTypes from "prop-types";
import styles from "./Select.module.css";

const Select = ({
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

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,

  /** Variant props */
  defaultSmall: PropTypes.number,
};

export default Select;
