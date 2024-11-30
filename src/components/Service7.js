import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service7.module.css";

const Service7 = ({
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
  const service6Style = useMemo(() => {
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

  const icon6Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar4Style = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const centralizedDashboardStyle = useMemo(() => {
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

Service7.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service6Display: PropTypes.string,
  service6FlexDirection: PropTypes.string,
  service6AlignItems: PropTypes.string,
  service6JustifyContent: PropTypes.string,
  service6Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconCarMargin: PropTypes.string,
  centralizedDashboardHeight: PropTypes.string,
  centralizedDashboardPosition: PropTypes.string,
  centralizedDashboardTop: PropTypes.string,
  centralizedDashboardLeft: PropTypes.string,
};

export default Service7;
