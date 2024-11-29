import { FunctionComponent } from "react";
import DropdownV from "./DropdownV";
import DropdownV1 from "./DropdownV1";
import DropdownV2 from "./DropdownV2";
import DropdownV3 from "./DropdownV3";
import DropdownV4 from "./DropdownV4";
import DropdownV5 from "./DropdownV5";
import DropdownV6 from "./DropdownV6";
import DropdownV7 from "./DropdownV7";
import styles from "./LinkWrapper.module.css";

export type LinkWrapperType = {
  className?: string;
};

const LinkWrapper: FunctionComponent<LinkWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.linkWrapper, className].join(" ")}>
      <div className={styles.dropdownsWrapper}>
        <DropdownV open1 />
        <DropdownV1 open1={false} />
        <DropdownV2 open1={false} />
        <DropdownV3 open1={false} />
        <DropdownV4 open1={false} />
      </div>
      <div className={styles.divider} />
      <div className={styles.dropdownsWrapper}>
        <DropdownV5 open1={false} />
        <DropdownV6 open1={false} />
        <DropdownV7 open1={false} />
      </div>
    </div>
  );
};

export default LinkWrapper;
