import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service4.module.css";

const Service4 = ({
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
  const service7Style = useMemo(() => {
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

  const icon3Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar1Style = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const customHumanitarianSolutionsStyle = useMemo(() => {
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

Service4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service7Display: PropTypes.string,
  service7FlexDirection: PropTypes.string,
  service7AlignItems: PropTypes.string,
  service7JustifyContent: PropTypes.string,
  service7Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconCarMargin: PropTypes.string,
  customHumanitarianSolutionsPosition: PropTypes.string,
  customHumanitarianSolutionsTop: PropTypes.string,
  customHumanitarianSolutionsLeft: PropTypes.string,
};

export default Service4;
