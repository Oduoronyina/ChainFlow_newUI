import { useMemo } from "react";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ3.module.css";

const FAQ3 = ({
  className = "",
  property1 = "Default",
  fAQ4AlignSelf,
  fAQ4Position,
  fAQ4Top,
  fAQ4Left,
  fAQ4Width,
  titleMargin,
}) => {
  const fAQ4Style = useMemo(() => {
    return {
      alignSelf: fAQ4AlignSelf,
      position: fAQ4Position,
      top: fAQ4Top,
      left: fAQ4Left,
      width: fAQ4Width,
    };
  }, [fAQ4AlignSelf, fAQ4Position, fAQ4Top, fAQ4Left, fAQ4Width]);

  const title3Style = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq4, className].join(" ")}
      data-property1={property1}
      style={fAQ4Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title3Style}>
            What makes Chain Flow secure?
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

FAQ3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  fAQ4AlignSelf: PropTypes.string,
  fAQ4Position: PropTypes.string,
  fAQ4Top: PropTypes.string,
  fAQ4Left: PropTypes.string,
  fAQ4Width: PropTypes.string,
  titleMargin: PropTypes.string,
};

export default FAQ3;
