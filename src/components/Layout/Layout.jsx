import styles from '../Layout/Layout.module.css';
import { ChoicesContainer } from '../ChoicesContainer/ChoicesContainer';
import { RulesButton } from '../RulesButton/RulesButton';
import { Scoreboard } from '../Scoreboard/Scoreboard';

export const Layout = ({ showRules }) => {
	return (
		<>
			<div className={styles.layout}>
				<Scoreboard />
				<ChoicesContainer />
				<RulesButton showRules={showRules} />
			</div>
		</>
	);
};
