import PropTypes from "prop-types";
import styles from "./Features.module.css";

const Features = ({ className = "" }) => {
  return (
    <div className={[styles.features, className].join(" ")}>
      <div className={styles.clients}>
        <img
          className={styles.clientsIcon}
          loading="lazy"
          alt=""
          src="/clients@2x.png"
        />
        <h1 className={styles.revolutionizingLogisticsWithContainer}>
          <span>Revolutionizing Logistics with</span>
          <span className={styles.blockchain}>{` Blockchain `}</span>
          <span>and</span>
          <span className={styles.blockchain}> AI</span>
        </h1>
        <div className={styles.subtitleAndButton}>
          <h2 className={styles.tSubtitle}>
            Chain Flow combines cutting-edge technology to enhance humanitarian
            logistics and supply chain management, ensuring timely and effective
            assistance in crisis situations.
          </h2>
          <button className={styles.button}>
            <div className={styles.getInTouch}>JOIN THE MOVEMENT</div>
          </button>
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
