import styles from './RulesLayout.module.css';
import IMG from '../../assets/image-rules-bonus.svg';
import CLOSE_MARK from '../../assets/icon-close.svg';

export const RulesLayout = ({ showRules }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.rulesLayout}>
				<h2>Rules</h2>
				<img src={IMG} alt='rules sketch' />
				<img onClick={showRules} src={CLOSE_MARK} alt='' />
			</div>
		</div>
	);
};
