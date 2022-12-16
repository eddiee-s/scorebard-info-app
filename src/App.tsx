import { useEffect, useState } from "react";
import Matches from "./components/Matches";
import { matchesMockData } from "./data/mockMatchesData";
import { updateGameStatus } from "./helpers";
import { MatchDataTypes } from "./types";

function App() {
  const [matchesData, setMatchesData] =
    useState<MatchDataTypes[]>(matchesMockData);

  const handleStartGame = (id: string) => {
    const startedGames = updateGameStatus(matchesData, id, "start");
    setMatchesData(startedGames);
  };

  const handleUpdateGame = (id: string) => {
    const updatedGames = updateGameStatus(matchesData, id, "update");
    setMatchesData(updatedGames);
  };

  const handleFinishGame = (id: string) => {
    //remove from matches when game finishes
    setMatchesData((prevState) => prevState.filter((match) => match.id !== id));
  };

  //TODO: test purposes delete useEffect 
  useEffect(() => {
    console.log(matchesData)
  }, [matchesData])
  

  return (
    <div className="flex flex-row justify-center w-screen">
      <Matches
        data={matchesData}
        handleStartGame={(id) => handleStartGame(id)}
        handleUpdateGame={(id) => handleUpdateGame(id)}
        handleFinishGame={(id) => handleFinishGame(id)}
      />
    </div>
  );
}

export default App;
