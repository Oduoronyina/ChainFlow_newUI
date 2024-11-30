import Select from "./Select";
import Stat from "./Stat";
import PropTypes from "prop-types";
import styles from "./TasksReports.module.css";

const TasksReports = ({ className = "", title = "Delivery reports" }) => {
  return (
    <div className={[styles.tasksReports, className].join(" ")}>
      <div className={styles.topChart}>
        <b className={styles.title}>{title}</b>
        <Select
          defaultSmall="Small"
          placeholder="This month"
          iconRight
          iconLeft={false}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.divider} />
        <div className={styles.topChart}>
          <Stat
            percent="32.8%"
            number="128"
            title="Completed Deliveries"
            squareCheck="/squarecheck.svg"
            lineRoundedArrowExternalRight="/line-roundedarrow-external-right.svg"
          />
          <Stat
            percent="10.80%"
            number="32"
            title="Incomplete Deliveries"
            squareCheck="/squarecancel.svg"
            percentColor="#ff5a65"
            lineRoundedArrowExternalRight="/line-roundedarrow-external-right-down.svg"
          />
          <Stat
            percent="24.32%"
            number="4"
            title="Late Deliveries"
            squareCheck="/squarealarm.svg"
            percentColor="#ff5a65"
            lineRoundedArrowExternalRight="/line-roundedarrow-external-right-down.svg"
          />
        </div>
      </div>
    </div>
  );
};

TasksReports.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default TasksReports;
