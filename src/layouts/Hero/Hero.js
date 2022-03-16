import React from "react";
import styles from "./Hero.module.css";
import timerApes from "assets/images/timer-apes.png";
import useCountdownTimer from "hooks/useCountdownTimer";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "March 25, 2022 00:00:00",
  });
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={styles.hero}>
      <div className="mb-50px">
        <div className="container-wrapper">
          <h1
            className={`${
              isBellow1000px
                ? "fs-40px lh-1_2 mb-5px"
                : "fs-64px lh-1_4 mb-10px"
            }  white text-center uppercase weight-9  `}
          >
            ThE First play to earn <br />{" "}
            <span className="pink">cannaverse</span>
          </h1>
          {isBellow1000px ? (
            ""
          ) : (
            <h5 className="sky-blue fs-24px text-center weight-9">
              Powered by Cactus Jack
            </h5>
          )}
        </div>
      </div>

      <div className="container-wrapper">
        <div className={`${styles.timer}`}>
          <img src={timerApes} className={styles.timerApes} alt="" />
          <div className={styles.timerCounts}>
            <div>
              <h1
                className={`${
                  isBellow1000px ? "fs-32px" : "fs-48px"
                }  white weight-7 mb-5px text-center`}
              >
                {days}
              </h1>
              <p
                className={`${
                  isBellow1000px ? "fs-14px" : "fs-18px"
                } white weight-5 text-center`}
              >
                Days
              </p>
            </div>
            <div>
              <h1
                className={`${
                  isBellow1000px ? "fs-32px" : "fs-48px"
                }  white weight-7 mb-5px text-center`}
              >
                {hours}
              </h1>
              <p
                className={`${
                  isBellow1000px ? "fs-14px" : "fs-18px"
                } white weight-5 text-center`}
              >
                Hours
              </p>
            </div>
            <div>
              <h1
                className={`${
                  isBellow1000px ? "fs-32px" : "fs-48px"
                }  white weight-7 mb-5px text-center`}
              >
                {minutes}
              </h1>
              <p
                className={`${
                  isBellow1000px ? "fs-14px" : "fs-18px"
                } white weight-5 text-center`}
              >
                Minutes
              </p>
            </div>
            <div>
              <h1
                className={`${
                  isBellow1000px ? "fs-32px" : "fs-48px"
                }  white weight-7 mb-5px text-center`}
              >
                {seconds}
              </h1>
              <p
                className={`${
                  isBellow1000px ? "fs-14px" : "fs-18px"
                } white weight-5 text-center`}
              >
                Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
