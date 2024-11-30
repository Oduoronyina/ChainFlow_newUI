import PropTypes from "prop-types";
import styles from "./LogoColor.module.css";

const LogoColor = ({ className = "", open1 = true }) => {
  return (
    <div className={[styles.logocolor, className].join(" ")} data-open={open1}>
      <img
        className={styles.logoIconcolor}
        loading="lazy"
        alt=""
        src="/logo-iconcolor.svg"
      />
      <div className={styles.wrapper}>
        <img
          className={styles.chainflowIcon}
          loading="lazy"
          alt=""
          src="/chainflow1.svg"
        />
      </div>
    </div>
  );
};

LogoColor.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default LogoColor;
