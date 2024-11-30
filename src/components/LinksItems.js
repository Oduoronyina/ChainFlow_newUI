import PropTypes from "prop-types";
import styles from "./LinksItems.module.css";

const LinksItems = ({
  className = "",
  select = false,
  titleSection = "Reports",
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-select={select}>
      <div className={styles.linkTitle}>{titleSection}</div>
    </div>
  );
};

LinksItems.propTypes = {
  className: PropTypes.string,
  titleSection: PropTypes.string,

  /** Variant props */
  select: PropTypes.bool,
};

export default LinksItems;
