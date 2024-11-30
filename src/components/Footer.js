import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "", property1 = "Default", group2 }) => {
  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.footerChild} loading="lazy" alt="" src={group2} />
      <div className={styles.footerInfo}>
        <div className={styles.companyInfo}>
          <div className={styles.multimodalLogisticsTradeContainer}>
            <p className={styles.chainflowLogistics}>
              ChainFlow Logistics LLC 80100-93400, Kenya
            </p>
            <p className={styles.tudorMajengo}>Tudor Majengo.</p>
          </div>
          <div className={styles.websiteAddress}>
            <div className={styles.websiteLink}>+254 712 564 078</div>
            <div className={styles.siomudovmlogtradecom}>
              info@chainflow.com
            </div>
          </div>
        </div>
        <div className={styles.footerContact}>
          <h1 className={styles.getInTouchContainer}>
            <span>{`GET `}</span>
            <span className={styles.inTouch}>IN TOUCH</span>
          </h1>
          <div className={styles.iconArrowOutwardWrapper}>
            <img
              className={styles.iconArrowOutward}
              loading="lazy"
              alt=""
              src="/icon--arrow-outward.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.multimodalLogisticsTrade}>
          © 2024 ChainFlow Logistics LLC - All Rights Reserved
        </div>
        <div className={styles.developedHilliTilsimat}>
          Developed Duol Studio
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  group2: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Footer;
