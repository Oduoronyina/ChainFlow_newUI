import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContactInfoRows.module.css";

export type ContactInfoRowsType = {
  className?: string;
  placeholderContact?: string;
  telephoneFaxOfSalesDepartment?: string;

  /** Style props */
  contactInfoRowsMinHeight?: CSSProperties["minHeight"];
  contactInfoRowsPadding?: CSSProperties["padding"];
};

const ContactInfoRows: FunctionComponent<ContactInfoRowsType> = ({
  className = "",
  contactInfoRowsMinHeight,
  contactInfoRowsPadding,
  placeholderContact,
  telephoneFaxOfSalesDepartment,
}) => {
  const contactInfoRowsStyle: CSSProperties = useMemo(() => {
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

export default ContactInfoRows;
