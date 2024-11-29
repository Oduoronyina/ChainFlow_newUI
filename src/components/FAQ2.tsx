import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ2.module.css";

export type FAQ2Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  fAQ3AlignSelf?: CSSProperties["alignSelf"];
  fAQ3Position?: CSSProperties["position"];
  fAQ3Top?: CSSProperties["top"];
  fAQ3Left?: CSSProperties["left"];
  fAQ3Width?: CSSProperties["width"];
  titleMargin?: CSSProperties["margin"];
};

const FAQ2: FunctionComponent<FAQ2Type> = ({
  className = "",
  property1 = "Default",
  fAQ3AlignSelf,
  fAQ3Position,
  fAQ3Top,
  fAQ3Left,
  fAQ3Width,
  titleMargin,
}) => {
  const fAQ3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: fAQ3AlignSelf,
      position: fAQ3Position,
      top: fAQ3Top,
      left: fAQ3Left,
      width: fAQ3Width,
    };
  }, [fAQ3AlignSelf, fAQ3Position, fAQ3Top, fAQ3Left, fAQ3Width]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq3, className].join(" ")}
      data-property1={property1}
      style={fAQ3Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title2Style}>
            How do we prioritize resource distribution?
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

export default FAQ2;
