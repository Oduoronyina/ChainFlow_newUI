import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ProgressBar from "./ProgressBar";
import styles from "./TeamProgressRow.module.css";

export type TeamProgressRowType = {
  className?: string;
  percent?: string;
  completed?: string;
  name1?: string;
  divider?: boolean;
  photoSquareJohnCarter?: string;

  /** Style props */
  dividerAlignSelf?: CSSProperties["alignSelf"];
  dividerWidth?: CSSProperties["width"];
};

const TeamProgressRow: FunctionComponent<TeamProgressRowType> = ({
  className = "",
  percent = "60%",
  completed = "6 of 10 completed",
  name1 = "John Carter",
  divider = true,
  photoSquareJohnCarter,
  dividerAlignSelf,
  dividerWidth,
}) => {
  const dividerStyle: CSSProperties = useMemo(() => {
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

export default TeamProgressRow;
