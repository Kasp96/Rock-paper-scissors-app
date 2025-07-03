import { useEffect, useState } from 'react';
import styles from '../Layout/Layout.module.css';
import { icons } from '../../utils/iconsList';
import { RulesButton } from '../RulesButton/RulesButton';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { MainContent } from '../MainContent/MainContent';
import { ChoicesContainer } from '../ChoicesContainer/ChoicesContainer';
import { FirstStep } from '../FirstStep/FirstStep';
import { RulesLayout } from '../RulesLayout/RulesLayout';

export const Layout = () => {
	const [isGameStarted, setIsGameStarted] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [score, setScore] = useState(localStorage.score);
	const [areRulesShown, setAreRulesShown] = useState(false);
	const [housePick, setHousePick] = useState(null);
	const [hasHousePicked, setHasHousePicked] = useState(false);
	const [hasScoreBeenUpdated, setHasScoreBeenUpdated] = useState(false);
	const [resultInfo, setResultInfo] = useState('');
	localStorage.setItem('score', Number(localStorage.getItem('score')) || 0);

	useEffect(() => {
		if (!isGameStarted) {
			const timer = setTimeout(() => {
				setHasHousePicked(true);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [isGameStarted]);

	const handleOnChoiceButtonClick = (index) => {
		setHasHousePicked(false);
		setHasScoreBeenUpdated(false);
		setResultInfo('');
		const random = Math.floor(Math.random() * 5);
		setHousePick(random);
		setIsGameStarted(false);
		setSelectedIndex(index);
	};

	const handleRulesButtonClick = () => {
		setAreRulesShown((prevRules) => !prevRules);
	};

	return (
		<>
			<div className={styles.layout}>
				<Scoreboard score={score} />
				<MainContent>
					{isGameStarted ? (
						<ChoicesContainer
							icons={icons}
							handleOnChoiceButtonClick={handleOnChoiceButtonClick}
						/>
					) : (
						<FirstStep
							housePick={housePick}
							setScore={setScore}
							index={selectedIndex}
							icons={icons}
							setIsGameStarted={setIsGameStarted}
							hasHousePicked={hasHousePicked}
							setHasHousePicked={setHasHousePicked}
							setHasScoreBeenUpdated={setHasScoreBeenUpdated}
							hasScoreBeenUpdated={hasScoreBeenUpdated}
							resultInfo={resultInfo}
							setResultInfo={setResultInfo}
						/>
					)}
				</MainContent>
				<RulesButton areRulesShown={handleRulesButtonClick} />
			</div>
			<RulesLayout
				toggleRules={handleRulesButtonClick}
				areRulesShown={areRulesShown}
			/>
		</>
	);
};
