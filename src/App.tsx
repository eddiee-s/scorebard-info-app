import { useState } from 'react';
import { matchesMockData } from './data/mockMatchesData';
import { MatchDataTypes } from './types';
import { BsCheck2Circle, BsPlayCircle } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

function App() {
  const [matchesData, setMatchesData] =
  useState<MatchDataTypes[]>(matchesMockData);

const handleStartGame = (id: string) => {
  console.log(id)
};

const handleUpdateGame = (id: string) => {
 console.log(id)
};

const handleFinishGame = (id: string) => {
  //remove from matches when game finishes
  setMatchesData((prevState) => prevState.filter((match) => match.id !== id));
};

  return (
    <div className="flex flex-row justify-center w-screen">
       <div className="shadow-2xl ml-2 px-5 pb-5">
      <h2 className="text-center p-5 text-lg text font-bold"> Scoreboard </h2>
      {matchesData.length === 0 && (
        <div className="flex p-5 h-3/4 items-center">
          <h3 className=""> No more matches to play </h3>
        </div>
      )}

        {matchesData.map((match) => (
          <div
            key={match.id}
            className="flex flex-col justify-center items-center py-5 border"
          >
            <div className=" flex flex-row justify-center items-center">
              <img
                className="mx-3 rounded-r-full h-10"
                src={`https://countryflagsapi.com/svg/${match.homeTeam.toLowerCase()}`}
                alt={match.homeTeam}
                height="50px"
              />
              <h3 className="text-lg font-semibold">
                {" "}
                {match.homeTeam} - {match.awayTeam}{" "}
              </h3>
              <img
                className="mx-3 rounded-l-full h-10"
                src={`https://countryflagsapi.com/svg/${match.awayTeam.toLowerCase()}`}
                alt={match.awayTeam}
                height="50px"
              />
            </div>
            {match.gameStarted && !match.gameUpdated && (
              <span>
                <h3 className="text-green-700 text-lg font-semibold">
                  {match.initialHomeScore} - {match.initialAwayScore}
                </h3>
              </span>
            )}
            {match.gameUpdated && match.gameStarted && (
              <span>
                <h3 className="text-blue-700 text-lg font-semibold">
                  {match.updatedHomeScore} - {match.updatedAwayScore}
                </h3>
              </span>
            )}
            <div className="flex flex-row align-middle justify-center">
              <button
                aria-label="Start"
                onClick={() => handleStartGame(match.id)}
              >
                <BsPlayCircle size={28} />
              </button>
              <button
                aria-label="Update"
                onClick={() => handleUpdateGame(match.id)}
              >
                <RxUpdate size={28} />
              </button>
              <button
                aria-label="Finish"
                onClick={() => handleFinishGame(match.id)}
              >
                <BsCheck2Circle size={28} />
              </button>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default App;
