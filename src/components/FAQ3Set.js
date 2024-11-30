import FAQ2 from "./FAQ2";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ3Set.module.css";

const FAQ3Set = ({ className = "" }) => {
  return (
    <div className={[styles.faq3, className].join(" ")}>
      <FAQ2
        property1="Default"
        fAQ3AlignSelf="unset"
        fAQ3Position="absolute"
        fAQ3Top="20px"
        fAQ3Left="20px"
        fAQ3Width="894px"
        titleMargin="0"
      />
      <div className={styles.property1true}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              How do we prioritize resource distribution?
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
            Our resource prioritization algorithms utilize AI to ensure that
            urgent needs are addressed first. This smart allocation process is
            automated through smart contracts, allowing for timely assistance
            during critical situations.
          </h2>
        </div>
      </div>
    </div>
  );
};

FAQ3Set.propTypes = {
  className: PropTypes.string,
};

export default FAQ3Set;
