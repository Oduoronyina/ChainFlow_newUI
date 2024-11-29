import { FunctionComponent } from "react";
import Select from "./Select";
import TeamProgressRow from "./TeamProgressRow";
import styles from "./TeamProgress.module.css";

export type TeamProgressType = {
  className?: string;
};

const TeamProgress: FunctionComponent<TeamProgressType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.teamProgress, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.topChart}>
          <b className={styles.title}>Team progress</b>
          <Select
            defaultSmall="Small"
            placeholder="This month"
            iconRight
            iconLeft={false}
          />
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.grid1Column}>
        <TeamProgressRow
          percent="60%"
          completed="6 of 10 completed"
          name1="John Carter"
          divider
          photoSquareJohnCarter="/photo-squarejohn-carter@2x.png"
        />
        <TeamProgressRow
          percent="32%"
          completed="6 of 18 completed"
          name1="Sophie Moore"
          divider
          photoSquareJohnCarter="/photo-squaresophie-moore@2x.png"
          dividerAlignSelf="stretch"
          dividerWidth="unset"
        />
        <TeamProgressRow
          percent="90%"
          completed="12 of 16 completed"
          name1="Sam Smith"
          divider={false}
          photoSquareJohnCarter="/photo-squaresam-smith@2x.png"
          dividerAlignSelf="unset"
          dividerWidth="447px"
        />
      </div>
    </div>
  );
};

export default TeamProgress;
