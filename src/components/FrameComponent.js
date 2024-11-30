import FAQS from "./FAQS";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
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

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
