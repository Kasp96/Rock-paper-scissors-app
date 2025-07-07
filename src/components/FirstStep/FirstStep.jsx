import { useEffect } from "react";
import styles from "./FirstStep.module.css";
import visuals from "./Visuals.module.css";
import { rules } from "../../utils/rules";
import { Result } from "../Result/Result";

export const FirstStep = ({
  icons,
  index,
  setScore,
  setIsGameStarted,
  housePick,
  hasHousePicked,
  setHasHousePicked,
  hasScoreBeenUpdated,
  setHasScoreBeenUpdated,
  resultInfo,
  setResultInfo,
  winner,
  setWinner,
}) => {
  const playerChoice = icons[index].name;
  const houseChoice = icons[housePick].name;

  useEffect(() => {
    if (!hasHousePicked || hasScoreBeenUpdated) return;
    let newResult = "";

    if (rules[playerChoice].includes(houseChoice)) {
      localStorage.score = Number(localStorage.score) + 1;
      setWinner("player");
      newResult = "You win";
    } else if (index === housePick) {
      newResult = "Draw";
    } else {
      newResult = "You lose";
      const current = Number(localStorage.score);
      localStorage.score = current > 0 ? current - 1 : 0;
      setWinner("house");
    }
    setResultInfo(newResult);
    setScore(Number(localStorage.score));
    setHasScoreBeenUpdated(true);
  }, [
    playerChoice,
    index,
    houseChoice,
    setScore,
    housePick,
    hasHousePicked,
    hasScoreBeenUpdated,
    setHasScoreBeenUpdated,
    setResultInfo,
    setWinner,
  ]);

  return (
    <>
      <div
        className={`${styles.firstStep} ${hasHousePicked ? styles.gap : ""}`}
      >
        <div>
          <div
            className={
              hasHousePicked && winner === "player" ? visuals.highlighted : ""
            }
          >
            <img
              className={`${styles.img} ${visuals[`border_${index}`]} `}
              src={icons[index].img}
              alt=""
            />
          </div>
          <h2>You picked</h2>
        </div>
        {hasHousePicked && (
          <Result
            result={resultInfo}
            setIsGameStarted={setIsGameStarted}
            hasHousePicked={hasHousePicked}
            setHasHousePicked={setHasHousePicked}
          />
        )}
        <div>
          {hasHousePicked ? (
            <div
              className={
                hasHousePicked && winner === "house" ? visuals.highlighted : ""
              }
            >
              <img
                className={`${styles.img} ${visuals[`border_${housePick}`]}`}
                src={icons[housePick].img}
                alt=""
              />
            </div>
          ) : (
            <div className={styles.emptyChoiceBox}>
              <div className={styles.emptyChoice}></div>
            </div>
          )}
          <h2>The house picked</h2>
        </div>
      </div>
    </>
  );
};
