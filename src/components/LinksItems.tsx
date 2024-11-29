import { FunctionComponent } from "react";
import styles from "./LinksItems.module.css";

export type LinksItemsType = {
  className?: string;
  titleSection?: string;

  /** Variant props */
  select?: boolean;
};

const LinksItems: FunctionComponent<LinksItemsType> = ({
  className = "",
  select = false,
  titleSection = "Reports",
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-select={select}>
      <div className={styles.linkTitle}>{titleSection}</div>
    </div>
  );
};

export default LinksItems;
