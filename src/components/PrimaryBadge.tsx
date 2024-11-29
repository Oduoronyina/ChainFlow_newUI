import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryBadge.module.css";

export type PrimaryBadgeType = {
  className?: string;
  text?: string;

  /** Variant props */
  defaultSmall?: boolean;
  defaultWhite?: boolean;
  weight?: string;

  /** Style props */
  primaryBadgeBackgroundColor?: CSSProperties["backgroundColor"];
  primaryBadgeBorder?: CSSProperties["border"];
  defaultColor?: CSSProperties["color"];
  defaultTextDecoration?: CSSProperties["textDecoration"];
};

const PrimaryBadge: FunctionComponent<PrimaryBadgeType> = ({
  className = "",
  defaultSmall = true,
  defaultWhite = false,
  weight = "Regular",
  text = "Aid",
  primaryBadgeBackgroundColor,
  primaryBadgeBorder,
  defaultColor,
  defaultTextDecoration,
}) => {
  const primaryBadgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: primaryBadgeBackgroundColor,
      border: primaryBadgeBorder,
    };
  }, [primaryBadgeBackgroundColor, primaryBadgeBorder]);

  const defaultStyle: CSSProperties = useMemo(() => {
    return {
      color: defaultColor,
      textDecoration: defaultTextDecoration,
    };
  }, [defaultColor, defaultTextDecoration]);

  return (
    <div
      className={[styles.primaryBadge, className].join(" ")}
      data-defaultSmall={defaultSmall}
      data-defaultWhite={defaultWhite}
      data-weight={weight}
      style={primaryBadgeStyle}
    >
      <div className={styles.default} style={defaultStyle}>
        {text}
      </div>
    </div>
  );
};

export default PrimaryBadge;
