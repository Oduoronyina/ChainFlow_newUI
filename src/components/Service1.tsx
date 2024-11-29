import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service1.module.css";

export type Service1Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service1Display?: CSSProperties["display"];
  service1FlexDirection?: CSSProperties["flexDirection"];
  service1AlignItems?: CSSProperties["alignItems"];
  service1JustifyContent?: CSSProperties["justifyContent"];
  service1Padding?: CSSProperties["padding"];
  service1Gap?: CSSProperties["gap"];
  iconPosition?: CSSProperties["position"];
  iconTop?: CSSProperties["top"];
  iconLeft?: CSSProperties["left"];
  iconCarMargin?: CSSProperties["margin"];
  aIDrivenDemandForecastingPosition?: CSSProperties["position"];
  aIDrivenDemandForecastingTop?: CSSProperties["top"];
  aIDrivenDemandForecastingLeft?: CSSProperties["left"];
};

const Service1: FunctionComponent<Service1Type> = ({
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
  const service1Style: CSSProperties = useMemo(() => {
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

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      position: iconPosition,
      top: iconTop,
      left: iconLeft,
    };
  }, [iconPosition, iconTop, iconLeft]);

  const iconCarStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const aIDrivenDemandForecastingStyle: CSSProperties = useMemo(() => {
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

export default Service1;
