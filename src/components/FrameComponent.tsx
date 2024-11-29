import { FunctionComponent } from "react";
import FAQS from "./FAQS";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.faqWrapper, className].join(" ")}>
      <div className={styles.faq}>
        <div className={styles.text}>
          <h1 className={styles.tFaqTitle}>Frequently Asked Questions</h1>
        </div>
        <FAQS fAQSFlex="unset" fAQSWidth="982px" />
      </div>
    </section>
  );
};

export default FrameComponent;
