import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import PageTopV from "../components/PageTopV";
import TeamProgress from "../components/TeamProgress";
import TasksReports from "../components/TasksReports";
import SubTitleWrapper from "../components/SubTitleWrapper";
import LandingPageDesingCard from "../components/LandingPageDesingCard";
import CopyrightBottom from "../components/CopyrightBottom";
import styles from "./DashboardV3Drivers.module.css";

const DashboardV3Drivers: FunctionComponent = () => {
  return (
    <div className={styles.dashboardV3Drivers}>
      <Sidebar open1 />
      <main className={styles.content}>
        <TopBar dropdown={false} />
        <section className={styles.pageContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <PageTopV
                title="Dashboard"
                date="September 24, 2026"
                button
                divider={false}
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.titleWrapper}>
                <b className={styles.title}>Current Job/Delivery</b>
              </div>
              <div className={styles.designTaskCard}>
                <div className={styles.designIconWrapper}>
                  <img
                    className={styles.squaredesignIcon}
                    loading="lazy"
                    alt=""
                    src="/squaredesign.svg"
                  />
                </div>
                <div className={styles.designContent}>
                  <div className={styles.taskTitleWrapper}>
                    <b className={styles.title}>Medical Delivery</b>
                  </div>
                  <div className={styles.progressBarWrapper}>
                    <div className={styles.progressBar}>
                      <div className={styles.progress}>
                        <div className={styles.start} />
                        <div className={styles.end} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.deliveryStatus}>
                    <div className={styles.pickup}>
                      <div className={styles.pickup1}>Pickup</div>
                    </div>
                    <div className={styles.intransist}>
                      <div className={styles.pickup1}>InTransist</div>
                    </div>
                    <div className={styles.intransist}>
                      <div className={styles.pickup1}>Delivered</div>
                    </div>
                  </div>
                  <img
                    className={styles.lineRoundedmenuIcon}
                    alt=""
                    src="/line-roundedmenu.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.gridCardsParent}>
              <div className={styles.gridCards}>
                <TeamProgress />
                <TasksReports title="Delivery reports" />
              </div>
              <SubTitleWrapper />
            </div>
            <div className={styles.tasksCard}>
              <LandingPageDesingCard
                avatar3={false}
                date="Nov 24, 2026"
                description="To enable communication in remote areas."
                avatar2
                title="Satellite Phones Delivery"
              />
              <LandingPageDesingCard
                avatar3={false}
                date="Oct 17, 2026"
                description="Supplying pre-assembled kits with flashlights."
                avatar2={false}
                title="Emergency Kit Distribution"
                descriptionWidth="331px"
                descriptionDisplay="inline-block"
                descriptionHeight="unset"
                avatarMarginLeft="unset"
                avatarMarginLeft1="unset"
              />
              <LandingPageDesingCard
                avatar3
                date="Nov 20, 2026"
                description="Transporting water tankers, fire retardants."
                avatar2
                title="Wildfire Support Logistics"
                descriptionWidth="unset"
                descriptionDisplay="unset"
                descriptionHeight="unset"
                avatarMarginLeft="-9px"
                avatarMarginLeft1="-9px"
              />
              <LandingPageDesingCard
                avatar3={false}
                date="Sept 17, 2026"
                description="Transporting and setting up solar kits for remote medical camps."
                avatar2
                title="Solar Panel Delivery"
                descriptionWidth="427px"
                descriptionDisplay="inline-block"
                descriptionHeight="26px"
                avatarMarginLeft="-9px"
                avatarMarginLeft1="unset"
              />
            </div>
          </div>
        </section>
        <footer className={styles.copyrightBottomWrapper}>
          <CopyrightBottom />
        </footer>
      </main>
    </div>
  );
};

export default DashboardV3Drivers;
