import { FunctionComponent } from "react";
import FAQS from "./FAQS";
import styles from "./FooterContainer.module.css";

export type FooterContainerType = {
  className?: string;
};

const FooterContainer: FunctionComponent<FooterContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerContainer, className].join(" ")}>
      <div className={styles.footerContent}>
        <h1 className={styles.tFaqTitle}>Frequently Asked Questions</h1>
        <div className={styles.fAQContainer}>
          <FAQS />
        </div>
      </div>
    </section>
  );
};

export default FooterContainer;
