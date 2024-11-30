import FAQ3 from "./FAQ3";
import PrimaryBadge from "./PrimaryBadge";
import PropTypes from "prop-types";
import styles from "./FAQ4Set.module.css";

const FAQ4Set = ({ className = "" }) => {
  return (
    <div className={[styles.faq4, className].join(" ")}>
      <FAQ3
        property1="Default"
        fAQ4AlignSelf="unset"
        fAQ4Position="absolute"
        fAQ4Top="20px"
        fAQ4Left="20px"
        fAQ4Width="894px"
        titleMargin="0"
      />
      <div className={styles.property1true}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>What makes Chain Flow secure?</h1>
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
            Utilizing blockchain technology ensures transparency and
            accountability throughout our supply chain. This secure framework
            allows for real-time tracking and fraud detection, fostering trust
            among stakeholders and beneficiaries.
          </h2>
        </div>
      </div>
    </div>
  );
};

FAQ4Set.propTypes = {
  className: PropTypes.string,
};

export default FAQ4Set;
