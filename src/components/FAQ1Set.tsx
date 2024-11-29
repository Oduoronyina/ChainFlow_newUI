import { FunctionComponent } from "react";
import FAQ from "./FAQ";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ1Set.module.css";

export type FAQ1SetType = {
  className?: string;
};

const FAQ1Set: FunctionComponent<FAQ1SetType> = ({ className = "" }) => {
  return (
    <div className={[styles.faq1, className].join(" ")}>
      <FAQ
        property1="Default"
        fAQ1AlignSelf="unset"
        fAQ1Position="absolute"
        fAQ1Top="20px"
        fAQ1Left="20px"
        fAQ1Width="894px"
        titleMargin="0"
      />
      <div className={styles.property1true}>
        <div className={styles.topContent}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              How can stakeholders access information?
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
            Stakeholders can easily access our user-friendly dashboard, which
            provides insights into inventory levels, delivery statuses, and
            logistical performance. This transparency is vital for maintaining
            trust and operational efficiency.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FAQ1Set;
