import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service2.module.css";

const Service2 = ({
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
  const service2Style = useMemo(() => {
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

  const icon1Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconAirplaneStyle = useMemo(() => {
    return {
      margin: iconAirplaneMargin,
    };
  }, [iconAirplaneMargin]);

  const smartRoutingStyle = useMemo(() => {
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

Service2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service2Display: PropTypes.string,
  service2FlexDirection: PropTypes.string,
  service2AlignItems: PropTypes.string,
  service2JustifyContent: PropTypes.string,
  service2Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconAirplaneMargin: PropTypes.string,
  smartRoutingWidth: PropTypes.string,
  smartRoutingHeight: PropTypes.string,
  smartRoutingPosition: PropTypes.string,
  smartRoutingDisplay: PropTypes.string,
  smartRoutingTop: PropTypes.string,
  smartRoutingLeft: PropTypes.string,
};

export default Service2;
