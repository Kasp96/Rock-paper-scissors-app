import { useState } from "react";
import styles from "../Layout/Layout.module.css";
import { RulesButton } from "../RulesButton/RulesButton";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { MainContent } from "../MainContent/MainContent";
import { ChoicesContainer } from "../ChoicesContainer/ChoicesContainer";
import { FirstStep } from "../FirstStep/FirstStep";
import { icons } from "../../utils/iconsList";

export const Layout = ({ showRules }) => {
  localStorage.setItem("score", Number(localStorage.getItem("score")) || 0);
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(localStorage.score);

  const handleOnChoiceButtonClick = (index) => {
    setIsGameStarted(false);
    setSelectedIndex(index);
  };

  console.log(localStorage.getItem("score") || 0);

  return (
    <>
      <div className={styles.layout}>
        <Scoreboard score={score} />
        <MainContent>
          {isGameStarted ? (
            <ChoicesContainer
              icons={icons}
              handleOnChoiceButtonClick={handleOnChoiceButtonClick}
            />
          ) : (
            <FirstStep
              setScore={setScore}
              index={selectedIndex}
              icons={icons}
            />
          )}
        </MainContent>
        <RulesButton showRules={showRules} />
      </div>
    </>
  );
};
