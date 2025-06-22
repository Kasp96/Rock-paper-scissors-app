import styles from './ChoicesContainer.module.css';
import CHOICES_BG from '../../assets/bg-pentagon.svg';
import PAPER_ICON from '../../assets/icon-paper.svg';
import ROCK_ICON from '../../assets/icon-rock.svg';
import SCISSORS_ICON from '../../assets/icon-scissors.svg';
import SPOCK_ICON from '../../assets/icon-spock.svg';
import LIZARD_ICON from '../../assets/icon-lizard.svg';
import { Choice } from '../Choice/Choice';

const icons = [PAPER_ICON, ROCK_ICON, SCISSORS_ICON, SPOCK_ICON, LIZARD_ICON];

export const ChoicesContainer = () => {
	return (
		<div className={styles.choicesContainer}>
			<img src={CHOICES_BG} />
			{icons.map((icon, index) => {
				return (
					<Choice
						className={`${styles.choice} ${styles[`choice-${index}`]}`}
						key={index}
						img={icon}
					/>
				);
			})}
		</div>
	);
};
