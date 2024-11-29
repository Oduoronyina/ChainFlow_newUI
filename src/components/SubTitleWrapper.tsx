import { FunctionComponent } from "react";
import SecondaryButton from "./SecondaryButton";
import styles from "./SubTitleWrapper.module.css";

export type SubTitleWrapperType = {
  className?: string;
};

const SubTitleWrapper: FunctionComponent<SubTitleWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subTitleWrapper, className].join(" ")}>
      <div className={styles.wrapper}>
        <b className={styles.title}>Due Delivery</b>
        <SecondaryButton
          defaultLight={false}
          defaultSmall
          text="Browse products"
          iconRight={false}
          iconLeft={false}
        />
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default SubTitleWrapper;
