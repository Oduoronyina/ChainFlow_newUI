import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service4.module.css";

export type Service4Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service7Display?: CSSProperties["display"];
  service7FlexDirection?: CSSProperties["flexDirection"];
  service7AlignItems?: CSSProperties["alignItems"];
  service7JustifyContent?: CSSProperties["justifyContent"];
  service7Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconCarMargin?: CSSProperties["margin"];
  customHumanitarianSolutionsPosition?: CSSProperties["position"];
  customHumanitarianSolutionsTop?: CSSProperties["top"];
  customHumanitarianSolutionsLeft?: CSSProperties["left"];
};

const Service4: FunctionComponent<Service4Type> = ({
  className = "",
  property1 = "Default",
  service7Display,
  service7FlexDirection,
  service7AlignItems,
  service7JustifyContent,
  service7Padding,
  iconMargin,
  iconCarMargin,
  customHumanitarianSolutionsPosition,
  customHumanitarianSolutionsTop,
  customHumanitarianSolutionsLeft,
}) => {
  const service7Style: CSSProperties = useMemo(() => {
    return {
      display: service7Display,
      flexDirection: service7FlexDirection,
      alignItems: service7AlignItems,
      justifyContent: service7JustifyContent,
      padding: service7Padding,
    };
  }, [
    service7Display,
    service7FlexDirection,
    service7AlignItems,
    service7JustifyContent,
    service7Padding,
  ]);

  const icon3Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar1Style: CSSProperties = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const customHumanitarianSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      position: customHumanitarianSolutionsPosition,
      top: customHumanitarianSolutionsTop,
      left: customHumanitarianSolutionsLeft,
    };
  }, [
    customHumanitarianSolutionsPosition,
    customHumanitarianSolutionsTop,
    customHumanitarianSolutionsLeft,
  ]);

  return (
    <div
      className={[styles.service7, className].join(" ")}
      data-property1={property1}
      style={service7Style}
    >
      <div className={styles.icon} style={icon3Style} />
      <img
        className={styles.iconCar}
        alt=""
        src="/icon--car.svg"
        style={iconCar1Style}
      />
      <h1
        className={styles.customHumanitarianSolutions}
        style={customHumanitarianSolutionsStyle}
      >
        Custom Humanitarian Solutions
      </h1>
    </div>
  );
};

export default Service4;
