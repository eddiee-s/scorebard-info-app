import { useState } from 'react';
import Matches from './components/Matches';
import { matchesMockData } from './data/mockMatchesData';
import { MatchDataTypes } from './types';

function App() {
  const [matchesData, setMatchesData] =
  useState<MatchDataTypes[]>(matchesMockData);

const handleStartGame = (id: string) => {
  const startedGames = matchesData.map((selMatch: MatchDataTypes) => {
    if (selMatch.id === id) {
          selMatch.gameStarted = true;   
        }
        return selMatch;
      }
  );
  setMatchesData(startedGames);
  console.log(id)
};

const handleUpdateGame = (id: string) => {
//  console.log(id)
 console.log(matchesData)
};

const handleFinishGame = (id: string) => {
  //remove from matches when game finishes
  setMatchesData((prevState) => prevState.filter((match) => match.id !== id));
};

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
