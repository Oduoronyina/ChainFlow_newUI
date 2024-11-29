import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service5.module.css";

export type Service5Type = {
  className?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  service4Display?: CSSProperties["display"];
  service4FlexDirection?: CSSProperties["flexDirection"];
  service4AlignItems?: CSSProperties["alignItems"];
  service4JustifyContent?: CSSProperties["justifyContent"];
  service4Padding?: CSSProperties["padding"];
  iconMargin?: CSSProperties["margin"];
  iconCarMargin?: CSSProperties["margin"];
  automatedDispatchManagementPosition?: CSSProperties["position"];
  automatedDispatchManagementTop?: CSSProperties["top"];
  automatedDispatchManagementLeft?: CSSProperties["left"];
};

const Service5: FunctionComponent<Service5Type> = ({
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
  const service4Style: CSSProperties = useMemo(() => {
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

  const icon4Style: CSSProperties = useMemo(() => {
    return {
      margin: iconMargin,
    };
  }, [iconMargin]);

  const iconCar2Style: CSSProperties = useMemo(() => {
    return {
      margin: iconCarMargin,
    };
  }, [iconCarMargin]);

  const automatedDispatchManagementStyle: CSSProperties = useMemo(() => {
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

export default Service5;
