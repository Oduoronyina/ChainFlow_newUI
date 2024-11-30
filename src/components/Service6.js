import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service6.module.css";

const Service6 = ({
  className = "",
  property1 = "Default",
  service5Display,
  service5FlexDirection,
  service5AlignItems,
  service5JustifyContent,
  service5Padding,
  iconMargin,
  iconCarMargin,
  smartContractsHeight,
  smartContractsPosition,
  smartContractsTop,
  smartContractsLeft,
}) => {
  const service5Style = useMemo(() => {
    return {
      display: service5Display,
      flexDirection: service5FlexDirection,
      alignItems: service5AlignItems,
      justifyContent: service5JustifyContent,
      padding: service5Padding,
    };
  }, [
    service5Display,
    service5FlexDirection,
    service5AlignItems,
    service5JustifyContent,
    service5Padding,
  ]);

  const icon5Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar3Style = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const smartContractsStyle = useMemo(() => {
    return {
      height: smartContractsHeight,
      position: smartContractsPosition,
      top: smartContractsTop,
      left: smartContractsLeft,
    };
  }, [
    smartContractsHeight,
    smartContractsPosition,
    smartContractsTop,
    smartContractsLeft,
  ]);

  return (
    <div
      className={[styles.service5, className].join(" ")}
      data-property1={property1}
      style={service5Style}
    >
      <div className={styles.icon} style={icon5Style} />
      <img
        className={styles.iconCar}
        alt=""
        src="/icon--car.svg"
        style={iconCar3Style}
      />
      <h1 className={styles.smartContracts} style={smartContractsStyle}>
        Smart Contracts
      </h1>
    </div>
  );
};

Service6.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service5Display: PropTypes.string,
  service5FlexDirection: PropTypes.string,
  service5AlignItems: PropTypes.string,
  service5JustifyContent: PropTypes.string,
  service5Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconCarMargin: PropTypes.string,
  smartContractsHeight: PropTypes.string,
  smartContractsPosition: PropTypes.string,
  smartContractsTop: PropTypes.string,
  smartContractsLeft: PropTypes.string,
};

export default Service6;
