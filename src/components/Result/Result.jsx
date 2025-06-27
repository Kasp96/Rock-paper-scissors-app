import styles from "./Result.module.css";

export const Result = ({ result, setIsGameStarted }) => {
  return (
    <div className={styles.result}>
      <h2>{result}</h2>
      <button onClick={() => setIsGameStarted(true)}>Play again</button>
    </div>
  );
};
