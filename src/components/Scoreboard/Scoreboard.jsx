import styles from "./Scoreboard.module.css";
import LOGO from "../../assets/logo-bonus.svg";

export const Scoreboard = ({ score }) => {
  return (
    <div className={styles.scoreboard}>
      <img src={LOGO} alt="game logo" />
      <div>
        <p>score</p>
        <span>{score}</span>
      </div>
    </div>
  );
};
