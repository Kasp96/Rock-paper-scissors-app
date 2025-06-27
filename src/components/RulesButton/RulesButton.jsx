import styles from './RulesButton.module.css';

export const RulesButton = ({ areRulesShown }) => {
	return (
		<button onClick={areRulesShown} className={styles.button}>
			Rules
		</button>
	);
};
