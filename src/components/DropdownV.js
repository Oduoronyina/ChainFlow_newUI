import LinksItems from "./LinksItems";
import PropTypes from "prop-types";
import styles from "./DropdownV.module.css";

const DropdownV = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.dropdownv1, className].join(" ")} data-open={open1}>
      <div className={styles.linksItems}>
        <img className={styles.sidebarhomeIcon} alt="" src="/sidebarhome.svg" />
        <a className={styles.linkTitle}>Dashboard</a>
        <img
          className={styles.sidebarchevronDownIcon}
          alt=""
          src="/sidebarchevron-down.svg"
        />
      </div>
      <div className={styles.linksSet}>
        <LinksItems select={false} titleSection="Reports" />
        <LinksItems select={false} titleSection="Products" />
        <LinksItems select titleSection="Delivery" />
      </div>
    </div>
  );
};

DropdownV.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default DropdownV;
