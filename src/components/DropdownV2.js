import PropTypes from "prop-types";
import styles from "./DropdownV2.module.css";

const DropdownV2 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv3, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebaruserIcon}
        loading="lazy"
        alt=""
        src="/sidebaruser.svg"
      />
      <div className={styles.linkTitle}>Users</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV2;
