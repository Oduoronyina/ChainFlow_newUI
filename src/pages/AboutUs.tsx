import { FunctionComponent } from "react";
import Header from "../components/Header";
import FeaturesContainer from "../components/FeaturesContainer";
import Features from "../components/Features";
import FooterContainer from "../components/FooterContainer";
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.revolutionizingHumanitarian}>
        <div className={styles.revolutionizingHumanitarianL}>
          Revolutionizing humanitarian logistics through blockchain and AI for a
          more resilient future.
        </div>
        <img
          className={styles.containerMockup22x1}
          loading="lazy"
          alt=""
          src="/container-mockup-22x-1@2x.png"
        />
      </div>
      <Header showIconPlay={false} />
      <section className={styles.content}>
        <div className={styles.empoweringContainer}>
          <div className={styles.empoweringHumanitarian}>
            <h1 className={styles.empoweringHumanitarianAidContainer}>
              <p className={styles.empoweringHumanitarianAid}>
                <span>{`Empowering Humanitarian `}</span>
                <span className={styles.aid}>{`Aid `}</span>
              </p>
              <p className={styles.empoweringHumanitarianAid}>
                with Innovative Technology
              </p>
            </h1>
          </div>
          <div className={styles.buttonsAndStats}>
            <div className={styles.getInTouchButtonContainer}>
              <div className={styles.getInTouchButtonWrapper}>
                <button className={styles.button}>
                  <div className={styles.getInTouch}>GET STARTED</div>
                </button>
              </div>
              <div className={styles.stats}>
                <div className={styles.statsItems}>
                  <div className={styles.statsSeparators}>10+</div>
                  <div className={styles.yearsExperience}>Years Experience</div>
                </div>
                <div className={styles.statsItems1}>
                  <div className={styles.div}>8+</div>
                  <div className={styles.yearsExperience}>
                    Different countries
                  </div>
                </div>
                <div className={styles.statsItems1}>
                  <div className={styles.div}>4+</div>
                  <div className={styles.yearsExperience}>
                    Types of services
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeaturesContainer />
          <Features />
        </div>
      </section>
      <FooterContainer />
      <Footer property1="Default" group2="/group-2.svg" />
    </div>
  );
};

export default AboutUs;
