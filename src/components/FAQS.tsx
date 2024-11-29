import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FAQ from "./FAQ";
import FAQ1 from "./FAQ1";
import FAQ2 from "./FAQ2";
import FAQ3 from "./FAQ3";
import FAQ4 from "./FAQ4";
import styles from "./FAQS.module.css";

export type FAQSType = {
  className?: string;

  /** Style props */
  fAQSFlex?: CSSProperties["flex"];
  fAQSWidth?: CSSProperties["width"];
};

const FAQS: FunctionComponent<FAQSType> = ({
  className = "",
  fAQSFlex,
  fAQSWidth,
}) => {
  const fAQSStyle: CSSProperties = useMemo(() => {
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

export default FAQS;
