import styles from "../Layout/Layout.module.css";
import { useState } from "react";
import { RulesButton } from "../RulesButton/RulesButton";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { MainContent } from "../MainContent/MainContent";
import { ChoicesContainer } from "../ChoicesContainer/ChoicesContainer";
import { FirstStep } from "../FirstStep/FirstStep";
import PAPER_ICON from "../../assets/icon-paper.svg";
import ROCK_ICON from "../../assets/icon-rock.svg";
import SCISSORS_ICON from "../../assets/icon-scissors.svg";
import SPOCK_ICON from "../../assets/icon-spock.svg";
import LIZARD_ICON from "../../assets/icon-lizard.svg";

const icons = [PAPER_ICON, ROCK_ICON, SCISSORS_ICON, SPOCK_ICON, LIZARD_ICON];

export const Layout = ({ showRules }) => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOnChoiceButtonClick = (index) => {
    setIsGameStarted(false);
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.layout}>
        <Scoreboard />
        <MainContent>
          {isGameStarted ? (
            <ChoicesContainer
              icons={icons}
              handleOnChoiceButtonClick={handleOnChoiceButtonClick}
            />
          ) : (
            <FirstStep icons={icons} index={currentIndex} />
          )}
        </MainContent>
        <RulesButton showRules={showRules} />
      </div>
    </>
  );
};
