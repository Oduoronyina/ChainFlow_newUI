import { FunctionComponent } from "react";
import Service7 from "./Service7";
import styles from "./Service6Set.module.css";

export type Service6SetType = {
  className?: string;
};

const Service6Set: FunctionComponent<Service6SetType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.service6, className].join(" ")}>
      <Service7
        property1="Default"
        service6Display="unset"
        service6FlexDirection="unset"
        service6AlignItems="unset"
        service6JustifyContent="unset"
        service6Padding="unset"
        iconMargin="unset"
        iconCarMargin="unset"
        centralizedDashboardHeight="unset"
        centralizedDashboardPosition="absolute"
        centralizedDashboardTop="259px"
        centralizedDashboardLeft="45px"
      />
      <div className={styles.property1variant2}>
        <div className={styles.aUserFriendlyPlatform}>
          A user-friendly platform providing real-time visibility into inventory
          levels, shipment statuses, delivery metrics, and logistical
          performance
        </div>
      </div>
    </div>
  );
};

export default Service6Set;
