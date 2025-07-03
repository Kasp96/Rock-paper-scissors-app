import styles from './RulesLayout.module.css';
import IMG from '../../assets/image-rules-bonus.svg';
import CLOSE_MARK from '../../assets/icon-close.svg';

export const RulesLayout = ({ areRulesShown, toggleRules }) => {
	return (
		<div className={`${areRulesShown ? styles.rulesLayout : styles.hidden}`}>
			<h2>Rules</h2>
			<img src={IMG} alt='rules sketch' />
			<img onClick={toggleRules} src={CLOSE_MARK} alt='' />
		</div>
	);
};
