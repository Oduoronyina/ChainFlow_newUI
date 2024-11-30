import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextField.module.css";

const TextField = ({
  className = "",
  property1 = "Empty",
  textFieldLeft,
  placeholder,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      left: textFieldLeft,
    };
  }, [textFieldLeft]);

  return (
    <div
      className={[styles.textField, className].join(" ")}
      data-property1={property1}
      style={textFieldStyle}
    >
      <input
        className={styles.inputText}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  textFieldLeft: PropTypes.string,
};

export default TextField;
