import styles from "./ChoicesContainer.module.css";
import CHOICES_BG from "../../assets/bg-pentagon.svg";

import { Choice } from "../Choice/Choice";

export const ChoicesContainer = ({ handleOnChoiceButtonClick, icons }) => {
  return (
    <div className={styles.choicesContainer}>
      <img src={CHOICES_BG} />
      {icons.map((icon, index) => {
        return (
          <Choice
            handleOnChoiceButtonClick={() => handleOnChoiceButtonClick(index)}
            className={`${styles.choice} ${styles[`choice-${index}`]}`}
            key={index}
            img={icon.img}
          />
        );
      })}
    </div>
  );
};
