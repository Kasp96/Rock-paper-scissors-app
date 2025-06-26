import styles from './Scoreboard.module.css';
import LOGO from '../../assets/logo-bonus.svg';

export const Scoreboard = () => {
	return (
		<div className={styles.scoreboard}>
			<img src={LOGO} alt='game logo' />
			<div>
				<p>score</p>
				<span>12</span>
			</div>
		</div>
	);
};
``