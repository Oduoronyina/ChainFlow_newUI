import Service3 from "./Service3";
import PropTypes from "prop-types";
import styles from "./Service3Set.module.css";

const Service3Set = ({ className = "" }) => {
  return (
    <div className={[styles.service3, className].join(" ")}>
      <Service3
        property1="Default"
        service3Display="unset"
        service3FlexDirection="unset"
        service3AlignItems="unset"
        service3JustifyContent="unset"
        service3Padding="unset"
        iconMargin="unset"
        iconRailwayMargin="unset"
        blockchainBasedVerificationPosition="absolute"
        blockchainBasedVerificationTop="210px"
        blockchainBasedVerificationLeft="45px"
      />
      <div className={styles.property1variant2}>
        <div className={styles.securelyRecordingEvery}>
          Securely recording every transaction, shipment, and resource
          allocation to ensure transparency.
        </div>
      </div>
    </div>
  );
};

Service3Set.propTypes = {
  className: PropTypes.string,
};

export default Service3Set;
