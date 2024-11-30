import { useMemo } from "react";
import FAQ from "./FAQ";
import FAQ1 from "./FAQ1";
import FAQ2 from "./FAQ2";
import FAQ3 from "./FAQ3";
import FAQ4 from "./FAQ4";
import PropTypes from "prop-types";
import styles from "./FAQS.module.css";

const FAQS = ({ className = "", fAQSFlex, fAQSWidth }) => {
  const fAQSStyle = useMemo(() => {
    return {
      flex: fAQSFlex,
      width: fAQSWidth,
    };
  }, [fAQSFlex, fAQSWidth]);

  return (
    <div className={[styles.faqs, className].join(" ")} style={fAQSStyle}>
      <FAQ property1="Default" />
      <FAQ1 property1="Default" />
      <FAQ2 property1="Default" />
      <FAQ3 property1="Default" />
      <FAQ4 property1="Default" />
    </div>
  );
};

FAQS.propTypes = {
  className: PropTypes.string,

  /** Style props */
  fAQSFlex: PropTypes.string,
  fAQSWidth: PropTypes.string,
};

export default FAQS;
