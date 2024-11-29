import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ1.module.css";

export type FAQ1Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  fAQ2AlignSelf?: CSSProperties["alignSelf"];
  fAQ2Position?: CSSProperties["position"];
  fAQ2Top?: CSSProperties["top"];
  fAQ2Left?: CSSProperties["left"];
  fAQ2Width?: CSSProperties["width"];
  titleMargin?: CSSProperties["margin"];
};

const FAQ1: FunctionComponent<FAQ1Type> = ({
  className = "",
  property1 = "Default",
  fAQ2AlignSelf,
  fAQ2Position,
  fAQ2Top,
  fAQ2Left,
  fAQ2Width,
  titleMargin,
}) => {
  const fAQ2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: fAQ2AlignSelf,
      position: fAQ2Position,
      top: fAQ2Top,
      left: fAQ2Left,
      width: fAQ2Width,
    };
  }, [fAQ2AlignSelf, fAQ2Position, fAQ2Top, fAQ2Left, fAQ2Width]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq2, className].join(" ")}
      data-property1={property1}
      style={fAQ2Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title1Style}>
            What technology do we use for tracking?
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

export default FAQ1;
