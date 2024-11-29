import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ4.module.css";

export type FAQ4Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  fAQ5AlignSelf?: CSSProperties["alignSelf"];
  fAQ5Position?: CSSProperties["position"];
  fAQ5Top?: CSSProperties["top"];
  fAQ5Left?: CSSProperties["left"];
  fAQ5Width?: CSSProperties["width"];
  titleMargin?: CSSProperties["margin"];
};

const FAQ4: FunctionComponent<FAQ4Type> = ({
  className = "",
  property1 = "Default",
  fAQ5AlignSelf,
  fAQ5Position,
  fAQ5Top,
  fAQ5Left,
  fAQ5Width,
  titleMargin,
}) => {
  const fAQ5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: fAQ5AlignSelf,
      position: fAQ5Position,
      top: fAQ5Top,
      left: fAQ5Left,
      width: fAQ5Width,
    };
  }, [fAQ5AlignSelf, fAQ5Position, fAQ5Top, fAQ5Left, fAQ5Width]);

  const title4Style: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq5, className].join(" ")}
      data-property1={property1}
      style={fAQ5Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title4Style}>
            How does AI enhance our operations?
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

export default FAQ4;
