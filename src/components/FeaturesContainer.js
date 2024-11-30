import PropTypes from "prop-types";
import styles from "./FeaturesContainer.module.css";

const FeaturesContainer = ({ className = "" }) => {
  return (
    <div className={[styles.featuresContainer, className].join(" ")}>
      <div className={styles.featuresGrid}>
        <div className={styles.featuresColumns}>
          <div className={styles.featuresRows}>
            <div className={styles.checkIcons}>
              <img
                className={styles.checkIcon}
                loading="lazy"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <h3 className={styles.tFeatureTitle01}>Predictive Demand Modeling</h3>
        </div>
        <div className={styles.featuresColumns1}>
          <div className={styles.featuresRows}>
            <div className={styles.checkIcons}>
              <img className={styles.checkIcon} alt="" src="/check.svg" />
            </div>
          </div>
          <h3 className={styles.tFeatureTitle02}>
            Optimized Routing Solutions
          </h3>
        </div>
        <div className={styles.featuresColumns2}>
          <div className={styles.featuresRows}>
            <div className={styles.checkIcons}>
              <img className={styles.checkIcon} alt="" src="/check.svg" />
            </div>
          </div>
          <h3 className={styles.tFeatureTitle03}>
            Transparent Resource Allocation
          </h3>
        </div>
      </div>
    </div>
  );
};

FeaturesContainer.propTypes = {
  className: PropTypes.string,
};

export default FeaturesContainer;
