import PropTypes from "prop-types";
import styles from "./DropdownV6.module.css";

const DropdownV6 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv7, className].join(" ")} data-open={open1}>
      <img className={styles.sidebartoolsIcon} alt="" src="/sidebartools.svg" />
      <div className={styles.linkTitle}>Utility pages</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV6.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV6;
