import styles from '../Layout/Layout.module.css';
import { RulesButton } from '../RulesButton/RulesButton';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { MainContent } from '../MainContent/MainContent';
import { ChoicesContainer } from '../ChoicesContainer/ChoicesContainer';
import { FirstStep } from '../FirstStep/FirstStep';
import { useState } from 'react';

export const Layout = ({ showRules }) => {
	const [isGameStarted, setIsGameStarted] = useState(true);

	const handleOnChoiceButtonClick = (e) => {
		setIsGameStarted(false);
		console.log(e.target.currentSrc);
	};

	return (
		<>
			<div className={styles.layout}>
				<Scoreboard />
				<MainContent>
					{isGameStarted ? (
						<ChoicesContainer started={handleOnChoiceButtonClick} />
					) : (
						<FirstStep />
					)}
				</MainContent>
				<RulesButton showRules={showRules} />
			</div>
		</>
	);
};
