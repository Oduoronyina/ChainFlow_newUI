import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ.module.css";

export type FAQType = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  fAQ1AlignSelf?: CSSProperties["alignSelf"];
  fAQ1Position?: CSSProperties["position"];
  fAQ1Top?: CSSProperties["top"];
  fAQ1Left?: CSSProperties["left"];
  fAQ1Width?: CSSProperties["width"];
  titleMargin?: CSSProperties["margin"];
};

const FAQ: FunctionComponent<FAQType> = ({
  className = "",
  property1 = "Default",
  fAQ1AlignSelf,
  fAQ1Position,
  fAQ1Top,
  fAQ1Left,
  fAQ1Width,
  titleMargin,
}) => {
  const fAQ1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: fAQ1AlignSelf,
      position: fAQ1Position,
      top: fAQ1Top,
      left: fAQ1Left,
      width: fAQ1Width,
    };
  }, [fAQ1AlignSelf, fAQ1Position, fAQ1Top, fAQ1Left, fAQ1Width]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq1, className].join(" ")}
      data-property1={property1}
      style={fAQ1Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={titleStyle}>
            How can stakeholders access information?
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
                loading="lazy"
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

export default FAQ;
