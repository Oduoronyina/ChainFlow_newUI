import { FunctionComponent } from "react";
import FAQ4 from "./FAQ4";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ5Set.module.css";

export type FAQ5SetType = {
  className?: string;
};

const FAQ5Set: FunctionComponent<FAQ5SetType> = ({ className = "" }) => {
  return (
    <div className={[styles.faq5, className].join(" ")}>
      <FAQ4
        property1="Default"
        fAQ5AlignSelf="unset"
        fAQ5Position="absolute"
        fAQ5Top="20px"
        fAQ5Left="20px"
        fAQ5Width="894px"
        titleMargin="0"
      />
      <div className={styles.property1true}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              How does AI enhance our operations?
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
            AI plays a crucial role in optimizing logistics by analyzing vast
            amounts of data, predicting demand, and ensuring efficient resource
            allocation. Our AI-driven systems streamline routing and improve
            delivery times significantly, especially in emergencies.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FAQ5Set;
