import { useMemo } from "react";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";
import styles from "./TeamProgressRow.module.css";

const TeamProgressRow = ({
  className = "",
  percent = "60%",
  completed = "6 of 10 completed",
  name1 = "John Carter",
  divider = true,
  photoSquareJohnCarter,
  dividerAlignSelf,
  dividerWidth,
}) => {
  const dividerStyle = useMemo(() => {
    return {
      alignSelf: dividerAlignSelf,
      width: dividerWidth,
    };
  }, [dividerAlignSelf, dividerWidth]);

  return (
    <div className={[styles.teamProgressRow, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.profile}>
          <div className={styles.avatarCircle40px}>
            <img
              className={styles.photoSquarejohnCarter}
              loading="lazy"
              alt=""
              src={photoSquareJohnCarter}
            />
          </div>
          <div className={styles.name}>{name1}</div>
        </div>
        <div className={styles.progressWrapper}>
          <div className={styles.task}>{completed}</div>
          <div className={styles.progressBarWrapper}>
            <ProgressBar />
            <div className={styles.task}>{percent}</div>
          </div>
        </div>
      </div>
      {divider && <div className={styles.divider} style={dividerStyle} />}
    </div>
  );
};

TeamProgressRow.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.string,
  completed: PropTypes.string,
  name1: PropTypes.string,
  divider: PropTypes.bool,
  photoSquareJohnCarter: PropTypes.string,

  /** Style props */
  dividerAlignSelf: PropTypes.string,
  dividerWidth: PropTypes.string,
};

export default TeamProgressRow;
