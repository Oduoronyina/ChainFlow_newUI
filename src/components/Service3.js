import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service3.module.css";

const Service3 = ({
  className = "",
  property1 = "Default",
  service3Display,
  service3FlexDirection,
  service3AlignItems,
  service3JustifyContent,
  service3Padding,
  iconMargin,
  iconRailwayMargin,
  blockchainBasedVerificationPosition,
  blockchainBasedVerificationTop,
  blockchainBasedVerificationLeft,
}) => {
  const service3Style = useMemo(() => {
    return {
      display: service3Display,
      flexDirection: service3FlexDirection,
      alignItems: service3AlignItems,
      justifyContent: service3JustifyContent,
      padding: service3Padding,
    };
  }, [
    service3Display,
    service3FlexDirection,
    service3AlignItems,
    service3JustifyContent,
    service3Padding,
  ]);

  const icon2Style = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconRailwayStyle = useMemo(() => {
    return {
      margin: iconRailwayMargin,
    };
  }, [iconRailwayMargin]);

  const blockchainBasedVerificationStyle = useMemo(() => {
    return {
      position: blockchainBasedVerificationPosition,
      top: blockchainBasedVerificationTop,
      left: blockchainBasedVerificationLeft,
    };
  }, [
    blockchainBasedVerificationPosition,
    blockchainBasedVerificationTop,
    blockchainBasedVerificationLeft,
  ]);

  return (
    <div
      className={[styles.service3, className].join(" ")}
      data-property1={property1}
      style={service3Style}
    >
      <div className={styles.icon} style={icon2Style} />
      <img
        className={styles.iconRailway}
        loading="lazy"
        alt=""
        src="/icon--railway.svg"
        style={iconRailwayStyle}
      />
      <h1
        className={styles.blockchainBasedVerification}
        style={blockchainBasedVerificationStyle}
      >
        Blockchain-Based Verification
      </h1>
    </div>
  );
};

Service3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  service3Display: PropTypes.string,
  service3FlexDirection: PropTypes.string,
  service3AlignItems: PropTypes.string,
  service3JustifyContent: PropTypes.string,
  service3Padding: PropTypes.string,
  iconMargin: PropTypes.string,
  iconRailwayMargin: PropTypes.string,
  blockchainBasedVerificationPosition: PropTypes.string,
  blockchainBasedVerificationTop: PropTypes.string,
  blockchainBasedVerificationLeft: PropTypes.string,
};

export default Service3;
