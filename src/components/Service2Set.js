import Service2 from "./Service2";
import PropTypes from "prop-types";
import styles from "./Service2Set.module.css";

const Service2Set = ({ className = "" }) => {
  return (
    <div className={[styles.service2, className].join(" ")}>
      <Service2
        property1="Default"
        service2Display="unset"
        service2FlexDirection="unset"
        service2AlignItems="unset"
        service2JustifyContent="unset"
        service2Padding="unset"
        iconMargin="unset"
        iconAirplaneMargin="unset"
        smartRoutingWidth="unset"
        smartRoutingHeight="unset"
        smartRoutingPosition="absolute"
        smartRoutingDisplay="unset"
        smartRoutingTop="297px"
        smartRoutingLeft="45px"
      />
      <div className={styles.property1variant2}>
        <div className={styles.aiPoweredRouteOptimization}>
          AI-powered route optimization that considers real-time traffic,
          weather, and security updates to ensure fast and safe delivery of aid.
        </div>
      </div>
    </div>
  );
};

Service2Set.propTypes = {
  className: PropTypes.string,
};

export default Service2Set;
