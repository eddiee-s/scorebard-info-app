import { useEffect, useState } from "react";
import FinishedMatches from "./components/FinishedMatches";
import Matches from "./components/Matches";
import { matchesMockData } from "./data/mockMatchesData";
import { updateGameStatus } from "./helpers";
import { MatchDataTypes } from "./types";

function App() {
  const [matchesData, setMatchesData] = useState<MatchDataTypes[]>(matchesMockData);
    const [finishedMatches, setfinishedMatches] = useState<MatchDataTypes[]>([]);

  const handleStartGame = (id: string) => {
    const startedGames = updateGameStatus(matchesData, id, "start");
    setMatchesData(startedGames);
  };

  const handleUpdateGame = (id: string) => {
    const updatedGames = updateGameStatus(matchesData, id, "update");
    setMatchesData(updatedGames);
  };

  const handleFinishGame = (id: string) => {
    //remove from matchesData state when game finishes
    setMatchesData((prevState) => prevState.filter((match) => match.id !== id));

    const finishedGames = updateGameStatus(matchesData, id, "finish");
    const finishedGame = finishedGames.filter((match) => match.id === id);
    //set finished game in finishedMatches state
    setfinishedMatches((prevState) => [...prevState, ...finishedGame]);
  };

  //TODO: test purposes delete useEffect 
  useEffect(() => {
    console.log(matchesData)
    console.log(finishedMatches)
  }, [matchesData])
  

  return (
    <div className="flex flex-col justify-center w-screen md:flex-row">
      <Matches
        data={matchesData}
        handleStartGame={(id) => handleStartGame(id)}
        handleUpdateGame={(id) => handleUpdateGame(id)}
        handleFinishGame={(id) => handleFinishGame(id)}
      />
        <FinishedMatches data={finishedMatches} />
    </div>
  );
}

export default App;
