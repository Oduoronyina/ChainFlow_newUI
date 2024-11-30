import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Service.module.css";

const Service = ({
  className = "",
  property1 = 1,
  servicePlaceholders,
  transportLogisticsHeight,
  transportLogisticsDisplay,
}) => {
  const transportLogisticsStyle = useMemo(() => {
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

Service.propTypes = {
  className: PropTypes.string,
  servicePlaceholders: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  transportLogisticsHeight: PropTypes.string,
  transportLogisticsDisplay: PropTypes.string,
};

export default Service;
