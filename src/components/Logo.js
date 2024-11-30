import PropTypes from "prop-types";
import styles from "./Logo.module.css";

const Logo = ({ className = "", property1 = "White", chainFlow }) => {
  return (
    <div
      className={[styles.logo, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.logoIconwhite}
        loading="lazy"
        alt=""
        src="/logo-iconwhite.svg"
      />
      <div className={styles.chainflowWrapper}>
        <img
          className={styles.chainflowIcon}
          loading="lazy"
          alt=""
          src={chainFlow}
        />
      </div>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  chainFlow: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Logo;
