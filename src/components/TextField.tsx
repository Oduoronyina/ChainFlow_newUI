import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextField.module.css";

export type TextFieldType = {
  className?: string;
  placeholder?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  textFieldLeft?: CSSProperties["left"];
};

const TextField: FunctionComponent<TextFieldType> = ({
  className = "",
  property1 = "Empty",
  textFieldLeft,
  placeholder,
}) => {
  const textFieldStyle: CSSProperties = useMemo(() => {
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

export default TextField;
