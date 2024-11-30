import { useMemo } from "react";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ1.module.css";

const FAQ1 = ({
  className = "",
  property1 = "Default",
  fAQ2AlignSelf,
  fAQ2Position,
  fAQ2Top,
  fAQ2Left,
  fAQ2Width,
  titleMargin,
}) => {
  const fAQ2Style = useMemo(() => {
    return {
      alignSelf: fAQ2AlignSelf,
      position: fAQ2Position,
      top: fAQ2Top,
      left: fAQ2Left,
      width: fAQ2Width,
    };
  }, [fAQ2AlignSelf, fAQ2Position, fAQ2Top, fAQ2Left, fAQ2Width]);

  const title1Style = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq2, className].join(" ")}
      data-property1={property1}
      style={fAQ2Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title1Style}>
            What technology do we use for tracking?
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

FAQ1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  fAQ2AlignSelf: PropTypes.string,
  fAQ2Position: PropTypes.string,
  fAQ2Top: PropTypes.string,
  fAQ2Left: PropTypes.string,
  fAQ2Width: PropTypes.string,
  titleMargin: PropTypes.string,
};

export default FAQ1;
