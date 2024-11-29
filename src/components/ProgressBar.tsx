import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProgressBar.module.css";

export type ProgressBarType = {
  className?: string;

  /** Style props */
  progressGap?: CSSProperties["gap"];
};

const ProgressBar: FunctionComponent<ProgressBarType> = ({
  className = "",
  progressGap,
}) => {
  const progressStyle: CSSProperties = useMemo(() => {
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

export default ProgressBar;
