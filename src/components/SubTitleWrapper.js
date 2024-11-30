import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";
import styles from "./SubTitleWrapper.module.css";

const SubTitleWrapper = ({ className = "" }) => {
  return (
    <div className={[styles.subTitleWrapper, className].join(" ")}>
      <div className={styles.wrapper}>
        <b className={styles.title}>Due Delivery</b>
        <SecondaryButton
          defaultLight={false}
          defaultSmall
          text="Browse products"
          iconRight={false}
          iconLeft={false}
        />
      </div>
      <div className={styles.divider} />
    </div>
  );
};

SubTitleWrapper.propTypes = {
  className: PropTypes.string,
};

export default SubTitleWrapper;
