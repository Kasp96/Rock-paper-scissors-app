import styles from './Result.module.css';

export const Result = ({
	result,
	setIsGameStarted,
	hasHousePicked,
	setHasHousePicked,
}) => {
	return (
		<div className={styles.result}>
			<h2>{result}</h2>
			{hasHousePicked && (
				<button
					onClick={() => {
						setIsGameStarted(true);
						setHasHousePicked(false);
					}}>
					Play again
				</button>
			)}
		</div>
	);
};
