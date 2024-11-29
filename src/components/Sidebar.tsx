import { FunctionComponent } from "react";
import LogoColor from "./LogoColor";
import LinkWrapper from "./LinkWrapper";
import PrimaryButton from "./PrimaryButton";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;

  /** Variant props */
  open1?: boolean;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  className = "",
  open1 = true,
}) => {
  return (
    <div className={[styles.sidebar, className].join(" ")} data-open={open1}>
      <div className={styles.infoSidebar}>
        <div className={styles.heading}>
          <LogoColor open1 />
          <img
            className={styles.collapseButtonIcon}
            loading="lazy"
            alt=""
            src="/collapse-button.svg"
          />
        </div>
      </div>
      <div className={styles.divider} />
      <LinkWrapper />
      <div className={styles.buttonWrapper}>
        <PrimaryButton
          defaultSmall={false}
          defaultWhite={false}
          text="Get design"
          iconRight
          iconLeft={false}
          lineRoundedSearch="/line-roundedsearch.svg"
          lineRoundedArrowRight="/line-roundedarrow-right.svg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
