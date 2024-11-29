import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./PageTopV.module.css";

export type PageTopVType = {
  className?: string;
  title?: string;
  date?: string;
  button?: boolean;
  divider?: boolean;
};

const PageTopV: FunctionComponent<PageTopVType> = ({
  className = "",
  title = "Dashboard",
  date = "September 24, 2026",
  button = true,
  divider = false,
}) => {
  return (
    <div className={[styles.pageTopv1, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.pageTitle}>
          <a className={styles.title}>{title}</a>
          <a className={styles.text}>{date}</a>
        </div>
        {button && (
          <PrimaryButton
            defaultSmall={false}
            defaultWhite={false}
            text="Create task"
            iconRight={false}
            iconLeft
            primaryButtonAlignSelf="unset"
            lineRoundedSearch="/line-roundedadd.svg"
            lineRoundedArrowRight="/line-roundedarrow-right2.svg"
          />
        )}
      </div>
      {divider && <div className={styles.divider} />}
    </div>
  );
};

export default PageTopV;
