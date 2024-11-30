import PropTypes from "prop-types";
import styles from "./DropdownV7.module.css";

const DropdownV7 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv8, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarwebflowIcon}
        alt=""
        src="/sidebarwebflow.svg"
      />
      <div className={styles.linkTitle}>Design pages</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV7.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV7;
