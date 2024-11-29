import { FunctionComponent } from "react";
import styles from "./CopyrightBottom.module.css";

export type CopyrightBottomType = {
  className?: string;
};

const CopyrightBottom: FunctionComponent<CopyrightBottomType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.copyrightBottom, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.copyrigh}>
          Copyright © ChainFlow | Designed by Oduor - Powered by Duol Studio
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default CopyrightBottom;
