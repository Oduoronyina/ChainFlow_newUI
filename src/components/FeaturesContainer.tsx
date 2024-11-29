import { FunctionComponent } from "react";
import styles from "./FeaturesContainer.module.css";

export type FeaturesContainerType = {
  className?: string;
};

const FeaturesContainer: FunctionComponent<FeaturesContainerType> = ({
  className = "",
}) => {
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

export default FeaturesContainer;
