import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Stat.module.css";

export type StatType = {
  className?: string;
  percent?: string;
  number?: string;
  title?: string;
  squareCheck?: string;
  lineRoundedArrowExternalRight?: string;

  /** Style props */
  percentColor?: CSSProperties["color"];
};

const Stat: FunctionComponent<StatType> = ({
  className = "",
  percent = "32.8%",
  number = "128",
  title = "Completed Deliveries",
  squareCheck,
  percentColor,
  lineRoundedArrowExternalRight,
}) => {
  const percentStyle: CSSProperties = useMemo(() => {
    return {
      color: percentColor,
    };
  }, [percentColor]);

  return (
    <div className={[styles.stat, className].join(" ")}>
      <img
        className={styles.squarecheckIcon}
        loading="lazy"
        alt=""
        src={squareCheck}
      />
      <div className={styles.content}>
        <div className={styles.completedTasks}>{title}</div>
        <div className={styles.numberWrapper}>
          <b className={styles.number}>{number}</b>
          <div className={styles.percentWrapper}>
            <div className={styles.percent} style={percentStyle}>
              {percent}
            </div>
            <img
              className={styles.lineRoundedarrowExternalRi}
              alt=""
              src={lineRoundedArrowExternalRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
