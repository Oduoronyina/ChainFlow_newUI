import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service7.module.css";

export type Service7Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service6Display?: CSSProperties["display"];
  service6FlexDirection?: CSSProperties["flexDirection"];
  service6AlignItems?: CSSProperties["alignItems"];
  service6JustifyContent?: CSSProperties["justifyContent"];
  service6Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconCarMargin?: CSSProperties["margin"];
  centralizedDashboardHeight?: CSSProperties["height"];
  centralizedDashboardPosition?: CSSProperties["position"];
  centralizedDashboardTop?: CSSProperties["top"];
  centralizedDashboardLeft?: CSSProperties["left"];
};

const Service7: FunctionComponent<Service7Type> = ({
  className = "",
  property1 = "Default",
  service6Display,
  service6FlexDirection,
  service6AlignItems,
  service6JustifyContent,
  service6Padding,
  iconMargin,
  iconCarMargin,
  centralizedDashboardHeight,
  centralizedDashboardPosition,
  centralizedDashboardTop,
  centralizedDashboardLeft,
}) => {
  const service6Style: CSSProperties = useMemo(() => {
    return {
      display: service6Display,
      flexDirection: service6FlexDirection,
      alignItems: service6AlignItems,
      justifyContent: service6JustifyContent,
      padding: service6Padding,
    };
  }, [
    service6Display,
    service6FlexDirection,
    service6AlignItems,
    service6JustifyContent,
    service6Padding,
  ]);

  const icon6Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar4Style: CSSProperties = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const centralizedDashboardStyle: CSSProperties = useMemo(() => {
    return {
      height: centralizedDashboardHeight,
      position: centralizedDashboardPosition,
      top: centralizedDashboardTop,
      left: centralizedDashboardLeft,
    };
  }, [
    centralizedDashboardHeight,
    centralizedDashboardPosition,
    centralizedDashboardTop,
    centralizedDashboardLeft,
  ]);

  return (
    <div
      className={[styles.service6, className].join(" ")}
      data-property1={property1}
      style={service6Style}
    >
      <div className={styles.icon} style={icon6Style} />
      <img
        className={styles.iconCar}
        alt=""
        src="/icon--car.svg"
        style={iconCar4Style}
      />
      <h1
        className={styles.centralizedDashboard}
        style={centralizedDashboardStyle}
      >
        Centralized Dashboard
      </h1>
    </div>
  );
};

export default Service7;
