import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./LandingPageDesingCard.module.css";

export type LandingPageDesingCardType = {
  className?: string;
  avatar3?: boolean;
  date?: string;
  description?: string;
  avatar2?: boolean;
  title?: string;

  /** Style props */
  descriptionWidth?: CSSProperties["width"];
  descriptionDisplay?: CSSProperties["display"];
  descriptionHeight?: CSSProperties["height"];
  avatarMarginLeft?: CSSProperties["marginLeft"];
  avatarMarginLeft1?: CSSProperties["marginLeft"];
};

const LandingPageDesingCard: FunctionComponent<LandingPageDesingCardType> = ({
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
  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      width: descriptionWidth,
      display: descriptionDisplay,
      height: descriptionHeight,
    };
  }, [descriptionWidth, descriptionDisplay, descriptionHeight]);

  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: avatarMarginLeft,
    };
  }, [avatarMarginLeft]);

  const avatar1Style: CSSProperties = useMemo(() => {
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

export default LandingPageDesingCard;
