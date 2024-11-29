import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Service.module.css";

export type ServiceType = {
  className?: string;
  servicePlaceholders?: string;

  /** Variant props */
  property1?: 1;

  /** Style props */
  transportLogisticsHeight?: CSSProperties["height"];
  transportLogisticsDisplay?: CSSProperties["display"];
};

const Service: FunctionComponent<ServiceType> = ({
  className = "",
  property1 = 1,
  servicePlaceholders,
  transportLogisticsHeight,
  transportLogisticsDisplay,
}) => {
  const transportLogisticsStyle: CSSProperties = useMemo(() => {
    return {
      height: transportLogisticsHeight,
      display: transportLogisticsDisplay,
    };
  }, [transportLogisticsHeight, transportLogisticsDisplay]);

  return (
    <div
      className={[styles.service, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.text}>
        <div className={styles.servicePlaceholders}>{servicePlaceholders}</div>
        <h2
          className={styles.transportLogistics1}
          style={transportLogisticsStyle}
        >
          <p className={styles.transportLogistics}>Transport Logistics</p>
        </h2>
      </div>
    </div>
  );
};

export default Service;
