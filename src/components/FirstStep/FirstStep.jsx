import { useEffect } from 'react';
import styles from './FirstStep.module.css';
import visuals from './Visuals.module.css';
import { rules } from '../../utils/rules';
import { Result } from '../Result/Result';

export const FirstStep = ({ state, dispatch, icons }) => {
	const {
		selectedIndex,
		housePick,
		hasHousePicked,
		hasScoreBeenUpdated,
		winner,
	} = state;

	const playerChoice = icons[selectedIndex].name;
	const houseChoice = icons[housePick].name;

	useEffect(() => {
		if (!hasHousePicked || hasScoreBeenUpdated) return;

		let newResult = '';
		let updatedScore = Number(localStorage.getItem('score')) || 0;

		if (rules[playerChoice].includes(houseChoice)) {
			updatedScore += 1;
			newResult = 'You win';
			dispatch({
				type: 'SHOW_RESULT',
				payload: {
					score: updatedScore,
					winner: 'player',
					resultInfo: newResult,
				},
			});
		} else if (selectedIndex === housePick) {
			newResult = 'Draw';
			dispatch({
				type: 'SHOW_RESULT',
				payload: {
					score: updatedScore,
					winner: 'player',
					resultInfo: newResult,
				},
			});
		} else {
			updatedScore = Math.max(0, updatedScore - 1);
			newResult = 'You lose';
			dispatch({
				type: 'SHOW_RESULT',
				payload: {
					score: updatedScore,
					winner: 'house',
					resultInfo: newResult,
				},
			});
		}
		localStorage.setItem('score', updatedScore);
	}, [
		playerChoice,
		selectedIndex,
		houseChoice,
		housePick,
		hasHousePicked,
		hasScoreBeenUpdated,
		dispatch,
	]);

	return (
		<>
			<div
				className={`${styles.firstStep} ${hasHousePicked ? styles.gap : ''}`}>
				<div>
					<div
						className={
							hasHousePicked && winner === 'player' ? visuals.highlighted : ''
						}>
						<img
							className={`${styles.img} ${visuals[`border_${selectedIndex}`]} `}
							src={icons[selectedIndex].img}
							alt=''
						/>
					</div>
					<h2>You picked</h2>
				</div>
				{hasHousePicked && (
					<Result
						result={state.resultInfo}
						hasHousePicked={state.hasHousePicked}
						dispatch={dispatch}
					/>
				)}
				<div>
					{hasHousePicked ? (
						<div
							className={
								hasHousePicked && winner === 'house' ? visuals.highlighted : ''
							}>
							<img
								className={`${styles.img} ${visuals[`border_${housePick}`]}`}
								src={icons[housePick].img}
								alt=''
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
