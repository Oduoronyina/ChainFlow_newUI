import Service5 from "./Service5";
import PropTypes from "prop-types";
import styles from "./Service4Set.module.css";

const Service4Set = ({ className = "" }) => {
  return (
    <div className={[styles.service4, className].join(" ")}>
      <Service5
        property1="Default"
        service4Display="unset"
        service4FlexDirection="unset"
        service4AlignItems="unset"
        service4JustifyContent="unset"
        service4Padding="unset"
        iconMargin="unset"
        iconCarMargin="unset"
        automatedDispatchManagementPosition="absolute"
        automatedDispatchManagementTop="210px"
        automatedDispatchManagementLeft="45px"
      />
      <div className={styles.property1variant2}>
        <img
          className={styles.iconCar}
          loading="lazy"
          alt=""
          src="/icon--car-1.svg"
        />
        <div className={styles.usingAiDrivenRules}>
          Using AI-driven rules to prioritize shipments during critical
          emergencies based on urgency and resource scarcity.
        </div>
      </div>
    </div>
  );
};

Service4Set.propTypes = {
  className: PropTypes.string,
};

export default Service4Set;
