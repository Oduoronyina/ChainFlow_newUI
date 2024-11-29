import { FunctionComponent } from "react";
import ButtonButtonSM from "../components/ButtonButtonSM";
import TextField from "../components/TextField";
import styles from "./GetInTouchSendApplicati.module.css";

const GetInTouchSendApplicati: FunctionComponent = () => {
  return (
    <div className={styles.getInTouchSendApplicati}>
      <h1 className={styles.getInTouch}>Get in touch</h1>
      <section className={styles.descriptionOfTheRequestWrapper}>
        <div className={styles.descriptionOfThe}>
          Description of the request
        </div>
      </section>
      <img
        className={styles.iconClose}
        loading="lazy"
        alt=""
        src="/icon--close.svg"
      />
      <div className={styles.logInAs}>Log in as</div>
      <div className={styles.service}>
        <div className={styles.text}>
          <div className={styles.admin}>Guest</div>
          <div className={styles.admin1}>Admin</div>
        </div>
      </div>
      <div className={styles.service1}>
        <div className={styles.text}>
          <div className={styles.admin}>Driver</div>
          <div className={styles.admin3}>Warehouse Manager</div>
        </div>
      </div>
      <div className={styles.service2}>
        <div className={styles.text}>
          <div className={styles.admin}>Field Worker</div>
          <div className={styles.admin5}>Supplier</div>
        </div>
      </div>
      <div className={styles.buttonbuttonSm}>
        <div className={styles.logIn}>Log in</div>
      </div>
      <ButtonButtonSM />
      <img
        className={styles.getInTouchSendApplicatiChild}
        loading="lazy"
        alt=""
        src="/group-2.svg"
      />
      <div className={styles.iAgreeTo}>
        I agree to the processing of my personal data
      </div>
      <TextField
        property1="Empty"
        placeholder="Full name of the contact person"
      />
      <div className={styles.textField}>
        <div className={styles.lable}>Email</div>
        <div className={styles.fieldBackground} />
        <div className={styles.inputText}>
          <div className={styles.inputText1}>
            <div className={styles.text3}>
              <div className={styles.text4}>
                <div className={styles.inputText2}>info@gmail.com</div>
                <div className={styles.textChild} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextField
        property1="Empty"
        textFieldLeft="836px"
        placeholder="Contact number"
      />
    </div>
  );
};

export default GetInTouchSendApplicati;
