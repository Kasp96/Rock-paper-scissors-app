import styles from './Result.module.css';

export const Result = () => {
	return (
		<div className={styles.result}>
			<h2>You win</h2>
			<button>Play again</button>
		</div>
	);
};
