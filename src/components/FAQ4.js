import { useMemo } from "react";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ4.module.css";

const FAQ4 = ({
  className = "",
  property1 = "Default",
  fAQ5AlignSelf,
  fAQ5Position,
  fAQ5Top,
  fAQ5Left,
  fAQ5Width,
  titleMargin,
}) => {
  const fAQ5Style = useMemo(() => {
    return {
      alignSelf: fAQ5AlignSelf,
      position: fAQ5Position,
      top: fAQ5Top,
      left: fAQ5Left,
      width: fAQ5Width,
    };
  }, [fAQ5AlignSelf, fAQ5Position, fAQ5Top, fAQ5Left, fAQ5Width]);

  const title4Style = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq5, className].join(" ")}
      data-property1={property1}
      style={fAQ5Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title4Style}>
            How does AI enhance our operations?
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.detailsWrapper}>
            <PrimaryBadge
              defaultSmall={false}
              defaultWhite
              weight="Regular"
              text="Development"
              primaryBadgeBackgroundColor="#f6f1ff"
              primaryBadgeBorder="none"
              defaultColor="#9240fb"
              defaultTextDecoration="unset"
            />
            <div className={styles.dateWrapper}>
              <img
                className={styles.lineRoundedcalendarIcon}
                alt=""
                src="/line-roundedcalendar.svg"
              />
              <div className={styles.date}>Nov 24, 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FAQ4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  fAQ5AlignSelf: PropTypes.string,
  fAQ5Position: PropTypes.string,
  fAQ5Top: PropTypes.string,
  fAQ5Left: PropTypes.string,
  fAQ5Width: PropTypes.string,
  titleMargin: PropTypes.string,
};

export default FAQ4;
