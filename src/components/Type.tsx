import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Type.module.css";

export type TypeType = {
  className?: string;
  iconCar?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";

  /** Style props */
  typeBackgroundColor?: CSSProperties["backgroundColor"];
  typeBackgroundImage?: CSSProperties["backgroundImage"];
  typeBackgroundSize?: CSSProperties["backgroundSize"];
  groundShippingColor?: CSSProperties["color"];
};

const Type: FunctionComponent<TypeType> = ({
  className = "",
  property1 = "Default",
  typeBackgroundColor,
  typeBackgroundImage,
  typeBackgroundSize,
  iconCar,
  groundShippingColor,
}) => {
  const typeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeBackgroundColor,
      backgroundImage: typeBackgroundImage,
      backgroundSize: typeBackgroundSize,
    };
  }, [typeBackgroundColor, typeBackgroundImage, typeBackgroundSize]);

  const groundShippingStyle: CSSProperties = useMemo(() => {
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

export default Type;
