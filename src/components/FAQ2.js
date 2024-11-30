import { useMemo } from "react";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ2.module.css";

const FAQ2 = ({
  className = "",
  property1 = "Default",
  fAQ3AlignSelf,
  fAQ3Position,
  fAQ3Top,
  fAQ3Left,
  fAQ3Width,
  titleMargin,
}) => {
  const fAQ3Style = useMemo(() => {
    return {
      alignSelf: fAQ3AlignSelf,
      position: fAQ3Position,
      top: fAQ3Top,
      left: fAQ3Left,
      width: fAQ3Width,
    };
  }, [fAQ3AlignSelf, fAQ3Position, fAQ3Top, fAQ3Left, fAQ3Width]);

  const title2Style = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq3, className].join(" ")}
      data-property1={property1}
      style={fAQ3Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title2Style}>
            How do we prioritize resource distribution?
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

FAQ2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  fAQ3AlignSelf: PropTypes.string,
  fAQ3Position: PropTypes.string,
  fAQ3Top: PropTypes.string,
  fAQ3Left: PropTypes.string,
  fAQ3Width: PropTypes.string,
  titleMargin: PropTypes.string,
};

export default FAQ2;
