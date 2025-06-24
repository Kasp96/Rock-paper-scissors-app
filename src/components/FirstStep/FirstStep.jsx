import styles from "./FirstStep.module.css";
import IMG from "../../assets/icon-paper.svg";

export const FirstStep = ({ icons, index }) => {
  return (
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
        <div className={styles.emptyChoice}></div>
        <h2>The house picked</h2>
      </div>
    </div>
  );
};
