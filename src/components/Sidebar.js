import LogoColor from "./LogoColor";
import LinkWrapper from "./LinkWrapper";
import PrimaryButton from "./PrimaryButton";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = ({ className = "", open1 = true }) => {
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

Sidebar.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  open1: PropTypes.bool,
};

export default Sidebar;
