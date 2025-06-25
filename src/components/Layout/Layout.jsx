import { useState } from 'react';
import styles from '../Layout/Layout.module.css';
import { RulesButton } from '../RulesButton/RulesButton';
import { Scoreboard } from '../Scoreboard/Scoreboard';
import { MainContent } from '../MainContent/MainContent';
import { ChoicesContainer } from '../ChoicesContainer/ChoicesContainer';
import { FirstStep } from '../FirstStep/FirstStep';
import { Result } from '../Result/Result';
import PAPER_ICON from '../../assets/icon-paper.svg';
import ROCK_ICON from '../../assets/icon-rock.svg';
import SCISSORS_ICON from '../../assets/icon-scissors.svg';
import SPOCK_ICON from '../../assets/icon-spock.svg';
import LIZARD_ICON from '../../assets/icon-lizard.svg';

export const Layout = ({ showRules }) => {
	const [isGameStarted, setIsGameStarted] = useState(true);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const icons = [PAPER_ICON, ROCK_ICON, SCISSORS_ICON, SPOCK_ICON, LIZARD_ICON];

	const handleOnChoiceButtonClick = (index) => {
		setIsGameStarted(false);
		setSelectedIndex(index);
	};

	return (
		<>
			<div className={styles.layout}>
				<Scoreboard />
				<MainContent>
					{isGameStarted ? (
						<ChoicesContainer
							icons={icons}
							handleOnChoiceButtonClick={handleOnChoiceButtonClick}
						/>
					) : (
						<FirstStep index={selectedIndex} icons={icons} />
					)}
					{/* <div
						style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
						<FirstStep />
						<Result />
					</div> */}
				</MainContent>
				<RulesButton showRules={showRules} />
			</div>
		</>
	);
};
