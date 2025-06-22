import styles from './FirstStep.module.css';
import IMG from '../../assets/icon-paper.svg';

export const FirstStep = () => {
	return (
		<div className={styles.firstStep}>
			<div>
				<img src={IMG} alt='' />
				<h2>You picked</h2>
			</div>
			<div>
				<div className={styles.emptyChoice}></div>
				<h2>The house picked</h2>
			</div>
		</div>
	);
};
