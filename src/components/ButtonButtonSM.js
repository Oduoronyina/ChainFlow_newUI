import PropTypes from "prop-types";
import styles from "./ButtonButtonSM.module.css";

const ButtonButtonSM = ({ className = "" }) => {
  return (
    <button className={[styles.buttonbuttonSm, className].join(" ")}>
      <div className={styles.consult}>Send</div>
    </button>
  );
};

ButtonButtonSM.propTypes = {
  className: PropTypes.string,
};

export default ButtonButtonSM;
