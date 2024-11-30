import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service5.module.css";

const Service5 = ({
  className = "",
  property1 = "Default",
  service4Display,
  service4FlexDirection,
  service4AlignItems,
  service4JustifyContent,
  service4Padding,
  iconMargin,
  iconCarMargin,
  automatedDispatchManagementPosition,
  automatedDispatchManagementTop,
  automatedDispatchManagementLeft,
}) => {
  const service4Style = useMemo(() => {
    return {
      display: service4Display,
      flexDirection: service4FlexDirection,
      alignItems: service4AlignItems,
      justifyContent: service4JustifyContent,
      padding: service4Padding,
    };
  }, [
    service4Display,
    service4FlexDirection,
    service4AlignItems,
    service4JustifyContent,
    service4Padding,
  ]);

  const icon4Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar2Style = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const automatedDispatchManagementStyle = useMemo(() => {
    return {
      position: automatedDispatchManagementPosition,
      top: automatedDispatchManagementTop,
      left: automatedDispatchManagementLeft,
    };
  }, [
    automatedDispatchManagementPosition,
    automatedDispatchManagementTop,
    automatedDispatchManagementLeft,
  ]);

  return (
    <div
      className={[styles.service4, className].join(" ")}
      data-property1={property1}
      style={service4Style}
    >
      <div className={styles.icon} style={icon4Style} />
      <img
        className={styles.iconCar}
        alt=""
        src="/icon--car.svg"
        style={iconCar2Style}
      />
      <h1
        className={styles.automatedDispatchManagement}
        style={automatedDispatchManagementStyle}
      >
        Automated Dispatch Management
      </h1>
    </div>
  );
};

Service5.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service4Display: PropTypes.string,
  service4FlexDirection: PropTypes.string,
  service4AlignItems: PropTypes.string,
  service4JustifyContent: PropTypes.string,
  service4Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconCarMargin: PropTypes.string,
  automatedDispatchManagementPosition: PropTypes.string,
  automatedDispatchManagementTop: PropTypes.string,
  automatedDispatchManagementLeft: PropTypes.string,
};

export default Service5;
