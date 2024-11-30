import Service1 from "./Service1";
import PropTypes from "prop-types";
import styles from "./Service1Set.module.css";

const Service1Set = ({ className = "" }) => {
  return (
    <div className={[styles.service1, className].join(" ")}>
      <Service1
        property1="Default"
        service1Display="unset"
        service1FlexDirection="unset"
        service1AlignItems="unset"
        service1JustifyContent="unset"
        service1Padding="unset"
        service1Gap="unset"
        iconPosition="absolute"
        iconTop="45px"
        iconLeft="45px"
        iconCarMargin="unset"
        aIDrivenDemandForecastingPosition="absolute"
        aIDrivenDemandForecastingTop="210px"
        aIDrivenDemandForecastingLeft="45px"
      />
      <div className={styles.property1variant2}>
        <div className={styles.analyzingHistoricalData}>
          Analyzing historical data, weather patterns, and social signals to
          predict resource needs in disaster-prone or crisis-hit areas.
        </div>
      </div>
    </div>
  );
};

Service1Set.propTypes = {
  className: PropTypes.string,
};

export default Service1Set;
