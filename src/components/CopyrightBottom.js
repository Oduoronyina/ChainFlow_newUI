import PropTypes from "prop-types";
import styles from "./CopyrightBottom.module.css";

const CopyrightBottom = ({ className = "" }) => {
  return (
    <div className={[styles.copyrightBottom, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.copyrigh}>
          Copyright © ChainFlow | Designed by Oduor - Powered by Duol Studio
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

CopyrightBottom.propTypes = {
  className: PropTypes.string,
};

export default CopyrightBottom;
