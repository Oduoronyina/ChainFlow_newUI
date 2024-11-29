import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryBadge from "./PrimaryBadge";
import styles from "./FAQ3.module.css";

export type FAQ3Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  fAQ4AlignSelf?: CSSProperties["alignSelf"];
  fAQ4Position?: CSSProperties["position"];
  fAQ4Top?: CSSProperties["top"];
  fAQ4Left?: CSSProperties["left"];
  fAQ4Width?: CSSProperties["width"];
  titleMargin?: CSSProperties["margin"];
};

const FAQ3: FunctionComponent<FAQ3Type> = ({
  className = "",
  property1 = "Default",
  fAQ4AlignSelf,
  fAQ4Position,
  fAQ4Top,
  fAQ4Left,
  fAQ4Width,
  titleMargin,
}) => {
  const fAQ4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: fAQ4AlignSelf,
      position: fAQ4Position,
      top: fAQ4Top,
      left: fAQ4Left,
      width: fAQ4Width,
    };
  }, [fAQ4AlignSelf, fAQ4Position, fAQ4Top, fAQ4Left, fAQ4Width]);

  const title3Style: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
    };
  }, [titleMargin]);

  return (
    <div
      className={[styles.faq4, className].join(" ")}
      data-property1={property1}
      style={fAQ4Style}
    >
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <div className={styles.title} style={title3Style}>
            What makes Chain Flow secure?
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

export default FAQ3;
