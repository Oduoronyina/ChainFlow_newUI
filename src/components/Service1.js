import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service1.module.css";

const Service1 = ({
  className = "",
  property1 = "Default",
  service1Display,
  service1FlexDirection,
  service1AlignItems,
  service1JustifyContent,
  service1Padding,
  service1Gap,
  iconPosition,
  iconTop,
  iconLeft,
  iconCarMargin,
  aIDrivenDemandForecastingPosition,
  aIDrivenDemandForecastingTop,
  aIDrivenDemandForecastingLeft,
}) => {
  const service1Style = useMemo(() => {
    return {
      display: service1Display,
      flexDirection: service1FlexDirection,
      alignItems: service1AlignItems,
      justifyContent: service1JustifyContent,
      padding: service1Padding,
      gap: service1Gap,
    };
  }, [
    service1Display,
    service1FlexDirection,
    service1AlignItems,
    service1JustifyContent,
    service1Padding,
    service1Gap,
  ]);

  const iconStyle = useMemo(() => {
    return {
      position: iconPosition,
      top: iconTop,
      left: iconLeft,
    };
  }, [iconPosition, iconTop, iconLeft]);

  const iconCarStyle = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const aIDrivenDemandForecastingStyle = useMemo(() => {
    return {
      position: aIDrivenDemandForecastingPosition,
      top: aIDrivenDemandForecastingTop,
      left: aIDrivenDemandForecastingLeft,
    };
  }, [
    aIDrivenDemandForecastingPosition,
    aIDrivenDemandForecastingTop,
    aIDrivenDemandForecastingLeft,
  ]);

  return (
    <div
      className={[styles.service1, className].join(" ")}
      data-property1={property1}
      style={service1Style}
    >
      <div className={styles.icon} style={iconStyle} />
      <img
        className={styles.iconCar}
        loading="lazy"
        alt=""
        src="/icon--car.svg"
        style={iconCarStyle}
      />
      <h1
        className={styles.aiDrivenDemandForecasting}
        style={aIDrivenDemandForecastingStyle}
      >
        AI-Driven Demand Forecasting
      </h1>
    </div>
  );
};

Service1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service1Display: PropTypes.string,
  service1FlexDirection: PropTypes.string,
  service1AlignItems: PropTypes.string,
  service1JustifyContent: PropTypes.string,
  service1Padding: PropTypes.string,
  service1Gap: PropTypes.string,
  iconPosition: PropTypes.string,
  iconTop: PropTypes.string,
  iconLeft: PropTypes.string,
  iconCarMargin: PropTypes.string,
  aIDrivenDemandForecastingPosition: PropTypes.string,
  aIDrivenDemandForecastingTop: PropTypes.string,
  aIDrivenDemandForecastingLeft: PropTypes.string,
};

export default Service1;
