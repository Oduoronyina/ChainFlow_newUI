import PropTypes from "prop-types";
import styles from "./DropdownV1.module.css";

const DropdownV1 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv2, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarstarIcon}
        loading="lazy"
        alt=""
        src="/sidebarstar.svg"
      />
      <div className={styles.linkTitle}>Features</div>
      <img
        className={styles.sidebarchevronRightIcon}
        loading="lazy"
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV1;
