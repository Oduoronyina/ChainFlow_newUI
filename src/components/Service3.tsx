import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service3.module.css";

export type Service3Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service3Display?: CSSProperties["display"];
  service3FlexDirection?: CSSProperties["flexDirection"];
  service3AlignItems?: CSSProperties["alignItems"];
  service3JustifyContent?: CSSProperties["justifyContent"];
  service3Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconRailwayMargin?: CSSProperties["margin"];
  blockchainBasedVerificationPosition?: CSSProperties["position"];
  blockchainBasedVerificationTop?: CSSProperties["top"];
  blockchainBasedVerificationLeft?: CSSProperties["left"];
};

const Service3: FunctionComponent<Service3Type> = ({
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
  const service3Style: CSSProperties = useMemo(() => {
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

  const icon2Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconRailwayStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconRailwayMargin,
    };
  }, [iconRailwayMargin]);

  const blockchainBasedVerificationStyle: CSSProperties = useMemo(() => {
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

export default Service3;
