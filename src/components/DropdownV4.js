import PropTypes from "prop-types";
import styles from "./DropdownV4.module.css";

const DropdownV4 = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv5, className].join(" ")} data-open={open1}>
      <img
        className={styles.sidebarintegrationsIcon}
        loading="lazy"
        alt=""
        src="/sidebarintegrations.svg"
      />
      <div className={styles.linkTitle}>Integrations</div>
      <img
        className={styles.sidebarchevronRightIcon}
        alt=""
        src="/sidebarchevron-right.svg"
      />
    </div>
  );
};

DropdownV4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV4;
