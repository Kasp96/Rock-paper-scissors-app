import styles from './RulesButton.module.css';

export const RulesButton = ({ showRules }) => {
	return (
		<button onClick={showRules} className={styles.button}>
			Rules
		</button>
	);
};
