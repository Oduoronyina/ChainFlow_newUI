import FAQ1 from "./FAQ1";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ2Set.module.css";

const FAQ2Set = ({ className = "" }) => {
  return (
    <div className={[styles.faq2, className].join(" ")}>
      <FAQ1
        property1="Default"
        fAQ2AlignSelf="unset"
        fAQ2Position="absolute"
        fAQ2Top="20px"
        fAQ2Left="20px"
        fAQ2Width="894px"
        titleMargin="0"
      />
      <div className={styles.property1true}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              What technology do we use for tracking?
            </h1>
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
                defaultTextDecoration="none"
              />
              <div className={styles.dateWrapper}>
                <img
                  className={styles.lineRoundedcalendarIcon}
                  loading="lazy"
                  alt=""
                  src="/line-roundedcalendar.svg"
                />
                <div className={styles.date}>Nov 24, 2026</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomContent}>
          <h2 className={styles.paragraphDefault}>
            We incorporate IoT devices to monitor shipments and environmental
            conditions in real-time. This technology enables us to gather
            valuable data, ensuring that our logistics operations run smoothly
            and effectively.
          </h2>
        </div>
      </div>
    </div>
  );
};

FAQ2Set.propTypes = {
  className: PropTypes.string,
};

export default FAQ2Set;
