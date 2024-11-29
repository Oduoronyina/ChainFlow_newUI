import { FunctionComponent } from "react";
import Logo from "./Logo";
import Button from "./Button";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  showIconPlay?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  showIconPlay,
}) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <Logo property1="Red" chainFlow="/chainflow.svg" />
      </div>
      <nav className={styles.textsWrapper}>
        <nav className={styles.texts}>
          <a className={styles.home}>HOME</a>
          <a className={styles.about}>ABOUT</a>
          <a className={styles.services}>SERVICES</a>
        </nav>
      </nav>
      <Button
        property1="Button stroke LD"
        iconPlay="/icon--play.svg"
        showIconPlay={showIconPlay}
        watchVideo="GET IN TOUCH"
      />
    </header>
  );
};

export default Header;
