import styles from './Result.module.css';

export const Result = ({ result, hasHousePicked, dispatch }) => {
	return (
		<div className={styles.result}>
			<h2>{result}</h2>
			{hasHousePicked && (
				<button
					onClick={() => {
						dispatch({ type: 'RESET' });
					}}>
					Play again
				</button>
			)}
		</div>
	);
};
