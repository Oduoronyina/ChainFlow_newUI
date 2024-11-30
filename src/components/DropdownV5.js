import PropTypes from "prop-types";
import styles from "./DropdownV5.module.css";

const DropdownV5 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv6, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebargearIcon}
        loading="lazy"
        alt=""
        src="/sidebargear.svg"
      />
      <div className={styles.linkTitle}>Settings</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV5.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV5;
