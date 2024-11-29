import { FunctionComponent } from "react";
import Service6 from "./Service6";
import styles from "./Service5Set.module.css";

export type Service5SetType = {
  className?: string;
};

const Service5Set: FunctionComponent<Service5SetType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.service5, className].join(" ")}>
      <Service6
        property1="Default"
        service5Display="unset"
        service5FlexDirection="unset"
        service5AlignItems="unset"
        service5JustifyContent="unset"
        service5Padding="unset"
        iconMargin="unset"
        iconCarMargin="unset"
        smartContractsHeight="unset"
        smartContractsPosition="absolute"
        smartContractsTop="259px"
        smartContractsLeft="45px"
      />
      <div className={styles.property1variant2}>
        <div className={styles.automatingResourceDistributi}>
          Automating resource distribution and payment processes to reduce
          delays and human intervention.
        </div>
      </div>
    </div>
  );
};

export default Service5Set;
