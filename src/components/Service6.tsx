import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service6.module.css";

export type Service6Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service5Display?: CSSProperties["display"];
  service5FlexDirection?: CSSProperties["flexDirection"];
  service5AlignItems?: CSSProperties["alignItems"];
  service5JustifyContent?: CSSProperties["justifyContent"];
  service5Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconCarMargin?: CSSProperties["margin"];
  smartContractsHeight?: CSSProperties["height"];
  smartContractsPosition?: CSSProperties["position"];
  smartContractsTop?: CSSProperties["top"];
  smartContractsLeft?: CSSProperties["left"];
};

const Service6: FunctionComponent<Service6Type> = ({
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
  const service5Style: CSSProperties = useMemo(() => {
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

  const icon5Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar3Style: CSSProperties = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const smartContractsStyle: CSSProperties = useMemo(() => {
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

export default Service6;
