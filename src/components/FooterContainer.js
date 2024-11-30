import FAQS from "./FAQS";
import PropTypes from "prop-types";
import styles from "./FooterContainer.module.css";

const FooterContainer = ({ className = "" }) => {
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

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
