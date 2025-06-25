import styles from "./Result.module.css";

export const Result = ({result}) => {
  return (
    <div className={styles.result}>
      <h2>{result}</h2>
      <button>Play again</button>
    </div>
  );
};
