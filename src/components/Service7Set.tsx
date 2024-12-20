import { FunctionComponent } from "react";
import Service4 from "./Service4";
import styles from "./Service7Set.module.css";

export type Service7SetType = {
  className?: string;
};

const Service7Set: FunctionComponent<Service7SetType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.service7, className].join(" ")}>
      <Service4
        property1="Default"
        service7Display="unset"
        service7FlexDirection="unset"
        service7AlignItems="unset"
        service7JustifyContent="unset"
        service7Padding="unset"
        iconMargin="unset"
        iconCarMargin="unset"
        customHumanitarianSolutionsPosition="absolute"
        customHumanitarianSolutionsTop="210px"
        customHumanitarianSolutionsLeft="43px"
      />
      <div className={styles.property1variant2}>
        <img
          className={styles.iconCar}
          loading="lazy"
          alt=""
          src="/icon--car-1.svg"
        />
        <div className={styles.adaptingThePlatform}>
          Adapting the platform for use in various crises, from natural
          disasters to pandemics and conflict zones.
        </div>
      </div>
    </div>
  );
};

export default Service7Set;
