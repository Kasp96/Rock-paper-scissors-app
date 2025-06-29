import { useEffect } from 'react';
import styles from './FirstStep.module.css';
import { Result } from '../Result/Result';
import { rules } from '../../utils/rules';

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
}) => {
	const playerChoice = icons[index].name;
	const houseChoice = icons[housePick].name;

	useEffect(() => {
		if (!hasHousePicked || hasScoreBeenUpdated) return;

		let newResult = '';

		if (rules[playerChoice].includes(houseChoice)) {
			localStorage.score = Number(localStorage.score) + 1;

			newResult = 'You win';
		} else if (index === housePick) {
			newResult = 'Draw';
		} else {
			if (localStorage.score === '0') {
				newResult = 'Draw';
			} else {
				localStorage.score = Number(localStorage.score) - 1;
				newResult = 'You lose';
			}
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
	]);

	return (
		<>
			<div className={styles.firstStep}>
				<div>
					<div className={`${styles.highlighted}`}>
						<img
							className={`${styles.img} ${styles[`border_${index}`]} `}
							src={icons[index].img}
							alt=''
						/>
					</div>
					<h2>You picked</h2>
				</div>
				<div>
					{hasHousePicked ? (
						<img
							className={`${styles.img} ${styles[`border_${housePick}`]}`}
							src={icons[housePick].img}
							alt=''
						/>
					) : (
						<div className={styles.emptyChoice}></div>
					)}

					<h2>The house picked</h2>
				</div>
			</div>
			{hasHousePicked && (
				<Result
					result={resultInfo}
					setIsGameStarted={setIsGameStarted}
					hasHousePicked={hasHousePicked}
					setHasHousePicked={setHasHousePicked}
				/>
			)}
		</>
	);
};
