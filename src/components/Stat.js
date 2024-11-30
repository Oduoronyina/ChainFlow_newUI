import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Stat.module.css";

const Stat = ({
  className = "",
  percent = "32.8%",
  number = "128",
  title = "Completed Deliveries",
  squareCheck,
  percentColor,
  lineRoundedArrowExternalRight,
}) => {
  const percentStyle = useMemo(() => {
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

Stat.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  squareCheck: PropTypes.string,
  lineRoundedArrowExternalRight: PropTypes.string,

  /** Style props */
  percentColor: PropTypes.string,
};

export default Stat;
