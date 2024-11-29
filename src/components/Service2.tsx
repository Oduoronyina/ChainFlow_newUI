import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service2.module.css";

export type Service2Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service2Display?: CSSProperties["display"];
  service2FlexDirection?: CSSProperties["flexDirection"];
  service2AlignItems?: CSSProperties["alignItems"];
  service2JustifyContent?: CSSProperties["justifyContent"];
  service2Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconAirplaneMargin?: CSSProperties["margin"];
  smartRoutingWidth?: CSSProperties["width"];
  smartRoutingHeight?: CSSProperties["height"];
  smartRoutingPosition?: CSSProperties["position"];
  smartRoutingDisplay?: CSSProperties["display"];
  smartRoutingTop?: CSSProperties["top"];
  smartRoutingLeft?: CSSProperties["left"];
};

const Service2: FunctionComponent<Service2Type> = ({
  className = "",
  property1 = "Default",
  service2Display,
  service2FlexDirection,
  service2AlignItems,
  service2JustifyContent,
  service2Padding,
  iconMargin,
  iconAirplaneMargin,
  smartRoutingWidth,
  smartRoutingHeight,
  smartRoutingPosition,
  smartRoutingDisplay,
  smartRoutingTop,
  smartRoutingLeft,
}) => {
  const service2Style: CSSProperties = useMemo(() => {
    return {
      display: service2Display,
      flexDirection: service2FlexDirection,
      alignItems: service2AlignItems,
      justifyContent: service2JustifyContent,
      padding: service2Padding,
    };
  }, [
    service2Display,
    service2FlexDirection,
    service2AlignItems,
    service2JustifyContent,
    service2Padding,
  ]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconAirplaneStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconAirplaneMargin,
    };
  }, [iconAirplaneMargin]);

  const smartRoutingStyle: CSSProperties = useMemo(() => {
    return {
      width: smartRoutingWidth,
      height: smartRoutingHeight,
      position: smartRoutingPosition,
      display: smartRoutingDisplay,
      top: smartRoutingTop,
      left: smartRoutingLeft,
    };
  }, [
    smartRoutingWidth,
    smartRoutingHeight,
    smartRoutingPosition,
    smartRoutingDisplay,
    smartRoutingTop,
    smartRoutingLeft,
  ]);

  return (
    <div
      className={[styles.service2, className].join(" ")}
      data-property1={property1}
      style={service2Style}
    >
      <div className={styles.icon} style={icon1Style} />
      <img
        className={styles.iconAirplane}
        loading="lazy"
        alt=""
        src="/icon--airplane.svg"
        style={iconAirplaneStyle}
      />
      <h1 className={styles.smartRouting} style={smartRoutingStyle}>
        Smart Routing
      </h1>
    </div>
  );
};

export default Service2;
