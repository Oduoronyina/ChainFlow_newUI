import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  iconPlay?: string;
  showIconPlay?: boolean;
  watchVideo?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  buttonBorder?: CSSProperties["border"];
  buttonPadding?: CSSProperties["padding"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonPosition?: CSSProperties["position"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  watchVideoTextDecoration?: CSSProperties["textDecoration"];
  watchVideoHeight?: CSSProperties["height"];
  watchVideoWidth?: CSSProperties["width"];
  watchVideoColor?: CSSProperties["color"];
  watchVideoDisplay?: CSSProperties["display"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  property1 = "Button LD",
  buttonBorder,
  buttonPadding,
  buttonBackgroundColor,
  buttonPosition,
  buttonTop,
  buttonLeft,
  iconPlay,
  showIconPlay,
  watchVideo,
  watchVideoTextDecoration,
  watchVideoHeight,
  watchVideoWidth,
  watchVideoColor,
  watchVideoDisplay,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonBorder,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
    };
  }, [
    buttonBorder,
    buttonPadding,
    buttonBackgroundColor,
    buttonPosition,
    buttonTop,
    buttonLeft,
  ]);

  const watchVideoStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: watchVideoTextDecoration,
      height: watchVideoHeight,
      width: watchVideoWidth,
      color: watchVideoColor,
      display: watchVideoDisplay,
    };
  }, [
    watchVideoTextDecoration,
    watchVideoHeight,
    watchVideoWidth,
    watchVideoColor,
    watchVideoDisplay,
  ]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      data-property1={property1}
      style={buttonStyle}
    >
      {showIconPlay && (
        <img className={styles.iconPlay} alt="" src={iconPlay} />
      )}
      <a className={styles.watchVideo} style={watchVideoStyle}>
        {watchVideo}
      </a>
    </button>
  );
};

export default Button;
