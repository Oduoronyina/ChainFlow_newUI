import { FunctionComponent } from "react";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";
import Service7 from "./Service7";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.servicesContentParent}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesTitle}>
            <h1 className={styles.ourServices}>
              <span>{`Our `}</span>
              <span className={styles.services}>Services</span>
            </h1>
            <h2 className={styles.tSubtitle}>
              Chain Flow combines cutting-edge technology to enhance
              humanitarian logistics and supply chain management, ensuring
              timely and effective assistance in crisis situations.
            </h2>
          </div>
          <div className={styles.serviceList}>
            <Service1 property1="Default" />
            <Service2 property1="Default" />
            <Service3 property1="Default" />
            <Service4 property1="Default" />
            <Service5 property1="Default" />
            <Service6 property1="Default" />
            <Service7 property1="Default" />
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.getInTouch}>GET STARTED</div>
        </button>
      </div>
    </section>
  );
};

export default Content;
