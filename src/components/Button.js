import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
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
  const buttonStyle = useMemo(() => {
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

  const watchVideoStyle = useMemo(() => {
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

Button.propTypes = {
  className: PropTypes.string,
  iconPlay: PropTypes.string,
  showIconPlay: PropTypes.bool,
  watchVideo: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  buttonBorder: PropTypes.string,
  buttonPadding: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  buttonPosition: PropTypes.string,
  buttonTop: PropTypes.string,
  buttonLeft: PropTypes.string,
  watchVideoTextDecoration: PropTypes.string,
  watchVideoHeight: PropTypes.string,
  watchVideoWidth: PropTypes.string,
  watchVideoColor: PropTypes.string,
  watchVideoDisplay: PropTypes.string,
};

export default Button;
