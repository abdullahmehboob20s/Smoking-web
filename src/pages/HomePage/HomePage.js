import useCountdownTimer from "hooks/useCountdownTimer";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./HomePage.module.css";
import timerApes from "assets/images/timer-apes.png";

function HomePage() {
  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "March 25, 2022 00:00:00",
  });

  console.log("re-rendering");

  return (
    <div className={styles.Home}>
      <div className={styles.hero}>
        <Navbar />

        <div className="mb-50px">
          <div className="container-wrapper">
            <h1 className="fs-64px white text-center uppercase weight-9 lh-1_4 mb-10px">
              ThE First play to earn <br />{" "}
              <span className="pink">cannaverse</span>
            </h1>
            <h5 className="sky-blue fs-24px text-center weight-9">
              Powered by Cactus Jack
            </h5>
          </div>
        </div>

        <div className="container-wrapper">
          <div className={`${styles.timer}`}>
            <img src={timerApes} className={styles.timerApes} alt="" />
            <div className={styles.timerCounts}>
              <div>
                <h1 className="fs-48px white weight-7 mb-5px text-center">
                  {days}
                </h1>
                <p className="fs-18px white weight-5 text-center">Days</p>
              </div>
              <div>
                <h1 className="fs-48px white weight-7 mb-5px text-center">
                  {hours}
                </h1>
                <p className="fs-18px white weight-5 text-center">Hours</p>
              </div>
              <div>
                <h1 className="fs-48px white weight-7 mb-5px text-center">
                  {minutes}
                </h1>
                <p className="fs-18px white weight-5 text-center">Minutes</p>
              </div>
              <div>
                <h1 className="fs-48px white weight-7 mb-5px text-center">
                  {seconds}
                </h1>
                <p className="fs-18px white weight-5 text-center">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
