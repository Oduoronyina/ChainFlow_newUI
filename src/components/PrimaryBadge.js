import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PrimaryBadge.module.css";

const PrimaryBadge = ({
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
  const primaryBadgeStyle = useMemo(() => {
    return {
      backgroundColor: primaryBadgeBackgroundColor,
      border: primaryBadgeBorder,
    };
  }, [primaryBadgeBackgroundColor, primaryBadgeBorder]);

  const defaultStyle = useMemo(() => {
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

PrimaryBadge.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Variant props */
  defaultSmall: PropTypes.bool,
  defaultWhite: PropTypes.bool,
  weight: PropTypes.number,

  /** Style props */
  primaryBadgeBackgroundColor: PropTypes.string,
  primaryBadgeBorder: PropTypes.string,
  defaultColor: PropTypes.string,
  defaultTextDecoration: PropTypes.string,
};

export default PrimaryBadge;
