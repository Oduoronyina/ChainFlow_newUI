import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

export type LogoType = {
  className?: string;
  chainFlow?: string;

  /** Variant props */
  property1?: string;
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  property1 = "White",
  chainFlow,
}) => {
  return (
    <div
      className={[styles.logo, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.logoIconwhite}
        loading="lazy"
        alt=""
        src="/logo-iconwhite.svg"
      />
      <div className={styles.chainflowWrapper}>
        <img
          className={styles.chainflowIcon}
          loading="lazy"
          alt=""
          src={chainFlow}
        />
      </div>
    </div>
  );
};

export default Logo;
