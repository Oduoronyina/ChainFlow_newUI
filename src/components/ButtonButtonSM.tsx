import { FunctionComponent } from "react";
import styles from "./ButtonButtonSM.module.css";

export type ButtonButtonSMType = {
  className?: string;
};

const ButtonButtonSM: FunctionComponent<ButtonButtonSMType> = ({
  className = "",
}) => {
  return (
    <button className={[styles.buttonbuttonSm, className].join(" ")}>
      <div className={styles.consult}>Send</div>
    </button>
  );
};

export default ButtonButtonSM;
