import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ className = "", progressGap }) => {
  const progressStyle = useMemo(() => {
    return {
      gap: progressGap,
    };
  }, [progressGap]);

  return (
    <div className={[styles.progressBar, className].join(" ")}>
      <div className={styles.progress} style={progressStyle}>
        <div className={styles.start} />
        <div className={styles.start} />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  progressGap: PropTypes.string,
};

export default ProgressBar;
