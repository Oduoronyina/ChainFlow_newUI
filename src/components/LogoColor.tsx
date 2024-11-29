import { FunctionComponent } from "react";
import styles from "./LogoColor.module.css";

export type LogoColorType = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const LogoColor: FunctionComponent<LogoColorType> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.logocolor, className].join(" ")} data-open={open1}>
      <img
        className={styles.logoIconcolor}
        loading="lazy"
        alt=""
        src="/logo-iconcolor.svg"
      />
      <div className={styles.wrapper}>
        <img
          className={styles.chainflowIcon}
          loading="lazy"
          alt=""
          src="/chainflow1.svg"
        />
      </div>
    </div>
  );
};

export default LogoColor;
