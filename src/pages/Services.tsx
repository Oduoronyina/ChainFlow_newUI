import { FunctionComponent } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      <Header showIconPlay={false} />
      <Content />
      <FrameComponent />
      <Footer property1="Default" group2="/group-2.svg" />
    </div>
  );
};

export default Services;
