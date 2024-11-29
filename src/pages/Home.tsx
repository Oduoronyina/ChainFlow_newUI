import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Service from "../components/Service";
import Type from "../components/Type";
import ContactInfoRows from "../components/ContactInfoRows";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='getInTouch']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.home}>
      <Header showIconPlay={false} />
      <main className={styles.mainContentWrapper}>
        <section className={styles.mainContent}>
          <div className={styles.heroContentParent}>
            <div className={styles.heroContent}>
              <div className={styles.heroInnerContent}>
                <div className={styles.chainflowLogisticsSolutionParent}>
                  <h1 className={styles.chainflowLogisticsSolutionContainer}>
                    <p className={styles.chainflow}>{`ChainFlow `}</p>
                    <p className={styles.chainflow}>
                      <span>Logistics</span>
                      <span className={styles.solution}> Solution</span>
                    </p>
                  </h1>
                  <img
                    className={styles.containerMockup22x1}
                    alt=""
                    src="/container-mockup-22x-1@2x.png"
                  />
                </div>
                <div className={styles.heroButtonContainer}>
                  <button className={styles.button}>
                    <div className={styles.getInTouch}>GET IN TOUCH</div>
                  </button>
                </div>
              </div>
              <div className={styles.heroDescription}>
                <div className={styles.ourLogisticsCompanyContainer}>
                  <p
                    className={styles.chainflow}
                  >{`Our logistics company specializes in `}</p>
                  <p
                    className={styles.chainflow}
                  >{`delivering goods to destinations across `}</p>
                  <p className={styles.chainflow}>
                    the globe with efficiency and reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.statisticsPlaceholdersParent}>
                <div className={styles.statisticsPlaceholders}>10+</div>
                <div className={styles.yearsExperience}>Years Experience</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>8+</div>
                <div className={styles.yearsExperience}>
                  Different countries
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4+</div>
                <div className={styles.yearsExperience}>Types of services</div>
              </div>
            </div>
          </div>
          <div className={styles.weAreWrapper}>
            <div className={styles.weAre}>
              <div className={styles.imagesParent}>
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className={styles.forkliftImageContainer}>
                  <img
                    className={styles.aForkliftCarryingAContaine}
                    loading="lazy"
                    alt=""
                    src="/a-forklift-carrying-a-container@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.weAreAnContainer}>
                <p className={styles.chainflow}>
                  We are an international scale company that has
                </p>
                <p className={styles.chainflow}>
                  been trusted by all corners of the world. Use our
                </p>
                <p className={styles.chainflow}>
                  company to expedite your package delivery!
                </p>
              </div>
              <h1 className={styles.weAre1Container}>
                <p className={styles.chainflow}>We are</p>
                <p className={styles.logistics}>#1 Logistics</p>
                <p className={styles.chainflow}>WORLDWIDE</p>
              </h1>
              <button className={styles.button1} onClick={onButtonClick}>
                <div className={styles.getInTouch1}>GET IN TOUCH</div>
              </button>
              <Button
                property1="Button stroke LD"
                buttonBorder="2px solid #fff"
                buttonPadding="22px 57px"
                buttonBackgroundColor="#004f98"
                buttonPosition="absolute"
                buttonTop="764px"
                buttonLeft="1017px"
                iconPlay="/icon--play1.svg"
                showIconPlay
                watchVideo="Get Started"
                watchVideoTextDecoration="unset"
                watchVideoHeight="unset"
                watchVideoWidth="unset"
                watchVideoColor="#fff"
                watchVideoDisplay="unset"
              />
              <img
                className={styles.havokSoftwareLogowineIcon}
                loading="lazy"
                alt=""
                src="/havok-softwarelogowine.svg"
              />
              <img
                className={styles.sqliteLogowineIcon}
                alt=""
                src="/sqlitelogowine.svg"
              />
              <img
                className={styles.oculusVrLogowineIcon}
                loading="lazy"
                alt=""
                src="/oculus-vrlogowine.svg"
              />
              <div className={styles.linkedInContainerWrapper}>
                <div className={styles.linkedInContainer}>
                  <img
                    className={styles.linkedInIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.linkedinLogowineIcon}
                    loading="lazy"
                    alt=""
                    src="/linkedinlogowine.svg"
                  />
                </div>
              </div>
              <img
                className={styles.samsungLogowineIcon}
                loading="lazy"
                alt=""
                src="/samsunglogowine.svg"
              />
              <img
                className={styles.chamiloLogowineIcon}
                alt=""
                src="/chamilologowine.svg"
              />
            </div>
          </div>
          <h1 className={styles.everythingYouNeedContainer}>
            <p className={styles.chainflow}>
              <span className={styles.solution}>Everything</span>
              <span className={styles.span}>{` `}</span>
              <span>you</span>
            </p>
            <p className={styles.chainflow}>need we have!</p>
          </h1>
          <div className={styles.serviceListParent}>
            <div className={styles.serviceList}>
              <Service property1={1} servicePlaceholders="01" />
              <Service
                property1={1}
                servicePlaceholders="02"
                transportLogisticsHeight="76px"
                transportLogisticsDisplay="inline-block"
              />
              <Service
                property1={1}
                servicePlaceholders="03"
                transportLogisticsHeight="unset"
                transportLogisticsDisplay="unset"
              />
              <Service
                property1={1}
                servicePlaceholders="05"
                transportLogisticsHeight="unset"
                transportLogisticsDisplay="unset"
              />
              <Service
                property1={1}
                servicePlaceholders="06"
                transportLogisticsHeight="76px"
                transportLogisticsDisplay="inline-block"
              />
              <Service
                property1={1}
                servicePlaceholders="07"
                transportLogisticsHeight="76px"
                transportLogisticsDisplay="inline-block"
              />
            </div>
            <div className={styles.service}>
              <div className={styles.div2}>04</div>
              <h2 className={styles.transportLogistics}>
                <p
                  className={styles.industrialParkSale}
                >{`Industrial Park Sale  `}</p>
                <p className={styles.chainflow}>and lease of land</p>
              </h2>
            </div>
          </div>
          <div className={styles.deliveryOfYourPackageParent}>
            <h1 className={styles.deliveryOfYourContainer}>
              <p className={styles.chainflow}>Delivery of</p>
              <p className={styles.chainflow}>
                <span>your</span>
                <span className={styles.span1}>{` `}</span>
                <span className={styles.solution}>Package!</span>
              </p>
            </h1>
            <div className={styles.shippingOptions}>
              <Type property1="Default" iconCar="/icon--car.svg" />
              <Type
                property1="Default"
                typeBackgroundColor="unset"
                typeBackgroundImage="url('/type@3x.png')"
                typeBackgroundSize="cover"
                iconCar="/icon--airplane.svg"
                groundShippingColor="#fff"
              />
              <Type
                property1="Variant2"
                typeBackgroundColor="#f8f8f8"
                typeBackgroundImage="unset"
                typeBackgroundSize="unset"
                iconCar="/icon--railway.svg"
                groundShippingColor="#0b0b0b"
              />
              <Type
                property1="Default"
                typeBackgroundColor="#f8f8f8"
                typeBackgroundImage="unset"
                typeBackgroundSize="unset"
                iconCar="/icon--ship.svg"
                groundShippingColor="#0b0b0b"
              />
            </div>
          </div>
          <div className={styles.getInTouchParent}>
            <h1 className={styles.getInTouch2} data-scroll-to="getInTouch">
              Get in touch
            </h1>
            <div className={styles.contactDetails}>
              <div className={styles.contactInfoRowsParent}>
                <ContactInfoRows
                  placeholderContact="01"
                  telephoneFaxOfSalesDepartment="Telephone/Fax of Sales Department"
                />
                <ContactInfoRows
                  contactInfoRowsMinHeight="unset"
                  contactInfoRowsPadding="0px 0px 60px"
                  placeholderContact="02"
                  telephoneFaxOfSalesDepartment="Employments Issues "
                />
                <div className={styles.contactInfoRows}>
                  <div className={styles.frameGroup}>
                    <div className={styles.container}>
                      <div className={styles.div3}>03</div>
                      <div className={styles.instagram}>Instagram</div>
                    </div>
                    <h1 className={styles.chainflow1}>@chainFlow</h1>
                  </div>
                  <img
                    className={styles.cursorPointer}
                    loading="lazy"
                    alt=""
                    src="/cursor--pointer@2x.png"
                  />
                </div>
                <div className={styles.contactInfoRows1}>
                  <div className={styles.frameContainer}>
                    <div className={styles.container}>
                      <div className={styles.div4}>04</div>
                      <div className={styles.email}>Email</div>
                    </div>
                    <h1 className={styles.infochainflowcom}>
                      info@chainflow.com
                    </h1>
                  </div>
                </div>
              </div>
              <button className={styles.button2}>
                <div className={styles.getInTouch}>GET IN TOUCH</div>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer property1="Default" group2="/group-2.svg" />
    </div>
  );
};

export default Home;
