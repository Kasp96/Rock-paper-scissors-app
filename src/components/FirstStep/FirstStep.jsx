import styles from './FirstStep.module.css';

const housePick = Math.floor(Math.random() * 5);
console.log(housePick);

export const FirstStep = ({ icons, index }) => {
	return (
		<div className={styles.firstStep}>
			<div>
				<img
					className={`${styles.img} ${styles[`border_${index}`]}`}
					src={icons[index]}
					alt=''
				/>
				<h2>You picked</h2>
			</div>
			<div>
				<img
					className={`${styles.img} ${styles[`border_${housePick}`]}`}
					src={icons[housePick]}
					alt=''
				/>
				{/* <div className={styles.emptyChoice}></div> */}
				<h2>The house picked</h2>
			</div>
		</div>
	);
};
