import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ContactInfoRows.module.css";

const ContactInfoRows = ({
  className = "",
  contactInfoRowsMinHeight,
  contactInfoRowsPadding,
  placeholderContact,
  telephoneFaxOfSalesDepartment,
}) => {
  const contactInfoRowsStyle = useMemo(() => {
    return {
      minHeight: contactInfoRowsMinHeight,
      padding: contactInfoRowsPadding,
    };
  }, [contactInfoRowsMinHeight, contactInfoRowsPadding]);

  return (
    <div
      className={[styles.contactInfoRows, className].join(" ")}
      style={contactInfoRowsStyle}
    >
      <div className={styles.contactInfoColumns}>
        <div className={styles.contactInfoItems}>
          <div className={styles.placeholderContact}>{placeholderContact}</div>
          <div className={styles.telephonefaxOfSales}>
            {telephoneFaxOfSalesDepartment}
          </div>
        </div>
        <div className={styles.contactValues}>+254 712 564 078</div>
      </div>
    </div>
  );
};

ContactInfoRows.propTypes = {
  className: PropTypes.string,
  placeholderContact: PropTypes.string,
  telephoneFaxOfSalesDepartment: PropTypes.string,

  /** Style props */
  contactInfoRowsMinHeight: PropTypes.string,
  contactInfoRowsPadding: PropTypes.string,
};

export default ContactInfoRows;
