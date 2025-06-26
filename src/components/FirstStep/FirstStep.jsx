import { useEffect, useState } from "react";
import styles from "./FirstStep.module.css";
import { Result } from "../Result/Result";
import { rules } from "../../utils/rules";

const housePick = Math.floor(Math.random() * 5);
export const FirstStep = ({ icons, index, setScore }) => {
  const [resultInfo, setResultInfo] = useState("");

  const playerChoice = icons[index].name;
  const houseChoice = icons[housePick].name;

  useEffect(() => {
    if (rules[playerChoice].includes(houseChoice)) {
      localStorage.score++;
      setResultInfo("You win");
    } else if (index === housePick) {
      setResultInfo("Draw");
    } else {
      if (localStorage.score === "0") {
        setResultInfo("Draw");
      } else {
        localStorage.score--;
      }
      setResultInfo("You lose");
    }
  }, [playerChoice, index, houseChoice, setScore]);

  useEffect(() => {
    setScore(Number(localStorage.score));
  }, [setScore]);

  return (
    <>
      <div className={styles.firstStep}>
        <div>
          <img
            className={`${styles.img} ${styles[`border_${index}`]}`}
            src={icons[index].img}
            alt=""
          />
          <h2>You picked</h2>
        </div>
        <div>
          <img
            className={`${styles.img} ${styles[`border_${housePick}`]}`}
            src={icons[housePick].img}
            alt=""
          />
          {/* <div className={styles.emptyChoice}></div> */}
          <h2>The house picked</h2>
        </div>
      </div>
      <Result result={resultInfo} />
    </>
  );
};
