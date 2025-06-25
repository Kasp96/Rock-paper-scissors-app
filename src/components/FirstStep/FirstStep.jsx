import { useEffect, useState } from "react";
import { Result } from "../Result/Result";
import styles from "./FirstStep.module.css";

const housePick = Math.floor(Math.random() * 5);
const rules = {
  0: [4, 2],
  1: [3, 0],
  2: [2, 1],
  3: [0, 4],
  4: [1, 3],
};
// 0 - papier
// 1- rock
// 4 - lizard
// 3 - spock
// 2 - scisor

export const FirstStep = ({ icons, index }) => {
  const [resultInfo, setResultInfo] = useState("");

  useEffect(() => {
    if (rules[index].includes(housePick)) {
      setResultInfo("You win");
    } else if (index === housePick) {
      setResultInfo("Draw");
    } else {
      setResultInfo("You lose");
    }
  }, [index]);

  return (
    <>
      <div className={styles.firstStep}>
        <div>
          <img
            className={`${styles.img} ${styles[`border_${index}`]}`}
            src={icons[index]}
            alt=""
          />
          <h2>You picked</h2>
        </div>
        <div>
          <img
            className={`${styles.img} ${styles[`border_${housePick}`]}`}
            src={icons[housePick]}
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
