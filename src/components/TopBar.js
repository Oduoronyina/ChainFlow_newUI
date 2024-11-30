import InputText from "./InputText";
import PropTypes from "prop-types";
import styles from "./TopBar.module.css";

const TopBar = ({ className = "", dropdown = false }) => {
  return (
    <header
      className={[styles.topBar, className].join(" ")}
      data-dropdown={dropdown}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <a className={styles.title}>Dashboard</a>
          <InputText
            defaultSmall
            button={false}
            placeholder="Search for..."
            iconRight={false}
            iconLeft
          />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.icon}>
            <img
              className={styles.lineRoundedbellIcon}
              loading="lazy"
              alt=""
              src="/line-roundedbell.svg"
            />
            <div className={styles.dot} />
          </div>
          <div className={styles.profileWrapper}>
            <img
              className={styles.avatarCircle40pxIcon}
              loading="lazy"
              alt=""
              src="/avatar-circle40px@2x.png"
            />
            <div className={styles.infoWrapper}>
              <a className={styles.name}>John Carter</a>
              <a className={styles.role}>Account settings</a>
            </div>
          </div>
          <img
            className={styles.lineRoundedchevronUp}
            alt=""
            src="/line-roundedchevron-up.svg"
          />
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  dropdown: PropTypes.bool,
};

export default TopBar;
