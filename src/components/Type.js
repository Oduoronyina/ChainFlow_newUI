import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Type.module.css";

const Type = ({
  className = "",
  property1 = "Default",
  typeBackgroundColor,
  typeBackgroundImage,
  typeBackgroundSize,
  iconCar,
  groundShippingColor,
}) => {
  const typeStyle = useMemo(() => {
    return {
      backgroundColor: typeBackgroundColor,
      backgroundImage: typeBackgroundImage,
      backgroundSize: typeBackgroundSize,
    };
  }, [typeBackgroundColor, typeBackgroundImage, typeBackgroundSize]);

  const groundShippingStyle = useMemo(() => {
    return {
      color: groundShippingColor,
    };
  }, [groundShippingColor]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={typeStyle}
    >
      <div className={styles.icon} />
      <img className={styles.iconCar} loading="lazy" alt="" src={iconCar} />
      <h1 className={styles.groundShipping} style={groundShippingStyle}>
        <p className={styles.road}>{`Road `}</p>
        <p className={styles.freight}>Freight</p>
      </h1>
    </div>
  );
};

Type.propTypes = {
  className: PropTypes.string,
  iconCar: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  typeBackgroundColor: PropTypes.string,
  typeBackgroundImage: PropTypes.string,
  typeBackgroundSize: PropTypes.string,
  groundShippingColor: PropTypes.string,
};

export default Type;
