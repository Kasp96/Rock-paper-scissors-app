import { useEffect, useReducer } from 'react';
import styles from '../Layout/Layout.module.css';
import { icons } from '../../utils/iconsList';
import { reducer } from '../../reducer/reducer';
import { initialState } from '../../reducer/reducer';
import { RulesButton } from '../RulesButton/RulesButton';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { MainContent } from '../MainContent/MainContent';
import { ChoicesContainer } from '../ChoicesContainer/ChoicesContainer';
import { FirstStep } from '../FirstStep/FirstStep';
import { RulesLayout } from '../RulesLayout/RulesLayout';

export const Layout = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		if (!state.isGameStarted) {
			const timer = setTimeout(() => {
				dispatch({ type: 'SET_HAS_HOUSE_PICKED' });
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [state.isGameStarted]);

	const handleOnChoiceButtonClick = (index) => {
		const random = Math.floor(Math.random() * 5);
		dispatch({
			type: 'START_GAME',
			payload: {
				index: index,
				housePick: random,
			},
		});
	};

	const handleRulesButtonClick = () => {
		dispatch({ type: 'TOGGLE_RULES' });
	};

	return (
		<>
			<div className={state.areRulesShown ? `${styles.bgShadow}` : ''} />
			<div className={styles.layout}>
				<Scoreboard score={state.score} />
				<MainContent>
					{state.isGameStarted ? (
						<ChoicesContainer
							icons={icons}
							handleOnChoiceButtonClick={handleOnChoiceButtonClick}
						/>
					) : (
						<FirstStep state={state} dispatch={dispatch} icons={icons} />
					)}
				</MainContent>
				<RulesButton areRulesShown={handleRulesButtonClick} />
			</div>
			<RulesLayout
				toggleRules={handleRulesButtonClick}
				areRulesShown={state.areRulesShown}
			/>
		</>
	);
};
