import PropTypes from "prop-types";
import styles from "./DropdownV3.module.css";

const DropdownV3 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv4, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarcoinIcon}
        loading="lazy"
        alt=""
        src="/sidebarcoin.svg"
      />
      <div className={styles.linkTitle}>Pricing</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV3;
