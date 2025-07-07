import styles from "./Scoreboard.module.css";
import LOGO from "../../assets/logo-bonus.svg";

export const Scoreboard = ({ score }) => {
  return (
    <div className={styles.scoreboard}>
      <img src={LOGO} alt="game logo" />
      <div>
        <p>score</p>
        <span>{score === "" ? 0 : score}</span>
      </div>
    </div>
  );
};
