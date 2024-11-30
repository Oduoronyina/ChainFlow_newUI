import { useMemo } from "react";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./LandingPageDesingCard.module.css";

const LandingPageDesingCard = ({
  className = "",
  avatar3 = false,
  date = "Nov 24, 2026",
  description = "To enable communication in remote areas.",
  avatar2 = true,
  title = "Satellite Phones Delivery",
  descriptionWidth,
  descriptionDisplay,
  descriptionHeight,
  avatarMarginLeft,
  avatarMarginLeft1,
}) => {
  const descriptionStyle = useMemo(() => {
    return {
      width: descriptionWidth,
      display: descriptionDisplay,
      height: descriptionHeight,
    };
  }, [descriptionWidth, descriptionDisplay, descriptionHeight]);

  const avatarStyle = useMemo(() => {
    return {
      marginLeft: avatarMarginLeft,
    };
  }, [avatarMarginLeft]);

  const avatar1Style = useMemo(() => {
    return {
      marginLeft: avatarMarginLeft1,
    };
  }, [avatarMarginLeft1]);

  return (
    <div className={[styles.landingPageDesingCard, className].join(" ")}>
      <div className={styles.wrapper}>
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <div className={styles.task}>{title}</div>
            <div className={styles.description} style={descriptionStyle}>
              {description}
            </div>
          </div>
          <div className={styles.bottomWrapper}>
            <div className={styles.detailsWrapper}>
              <PrimaryBadge
                defaultSmall={false}
                defaultWhite
                weight="Regular"
                text="Aid"
              />
              <div className={styles.dateWrapper}>
                <img
                  className={styles.lineRoundedcalendarIcon}
                  loading="lazy"
                  alt=""
                  src="/line-roundedcalendar1.svg"
                />
                <div className={styles.date}>{date}</div>
              </div>
            </div>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <img
                  className={styles.photoSquarejohnCarter}
                  alt=""
                  src="/photo-squarejohn-carter-1@2x.png"
                />
              </div>
              {avatar2 && (
                <div className={styles.avatar1} style={avatarStyle}>
                  <img
                    className={styles.photoSquarejohnCarter}
                    alt=""
                    src="/photo-squaresophie-moore-1@2x.png"
                  />
                </div>
              )}
              {avatar3 && (
                <div className={styles.avatar2} style={avatar1Style}>
                  <img
                    className={styles.photoSquarejohnCarter}
                    alt=""
                    src="/photo-squaresam-smith-1@2x.png"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionsWrapper}>
        <img
          className={styles.actionButtonIcon}
          loading="lazy"
          alt=""
          src="/action-button.svg"
        />
        <img
          className={styles.actionButtonIcon}
          alt=""
          src="/action-button-1.svg"
        />
      </div>
    </div>
  );
};

LandingPageDesingCard.propTypes = {
  className: PropTypes.string,
  avatar3: PropTypes.bool,
  date: PropTypes.string,
  description: PropTypes.string,
  avatar2: PropTypes.bool,
  title: PropTypes.string,

  /** Style props */
  descriptionWidth: PropTypes.string,
  descriptionDisplay: PropTypes.string,
  descriptionHeight: PropTypes.string,
  avatarMarginLeft: PropTypes.string,
  avatarMarginLeft1: PropTypes.string,
};

export default LandingPageDesingCard;
