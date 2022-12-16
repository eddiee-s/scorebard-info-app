import { FC } from "react";
import { MatchDataTypes } from "../types";
import { BsCheck2Circle, BsPlayCircle } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import Button from "./Button";

interface MatchesPropTypes {
  data: MatchDataTypes[];
  handleStartGame?: (arg: string) => void;
  handleUpdateGame?: (arg: string) => void;
  handleFinishGame?: (arg: string) => void;
}

const Matches: FC<MatchesPropTypes> = ({
  data,
  handleStartGame = (arg) => arg,
  handleUpdateGame = (arg) => arg,
  handleFinishGame = (arg) => arg,
}) => {
  return (
    <div className="shadow-2xl ml-2 px-5 pb-5">
      <h2 className="text-center p-5 text-xl uppercase text font-bold"> Scoreboard </h2>
      {data.length === 0 && (
        <div className="flex h-3/4 items-center justify-center">
          <h3 className=""> There are no finished matches yet</h3>
        </div>
      )}
      
        {data.map((match) => (
          <div
            key={match.id}
            className="flex flex-col justify-center items-center py-5 border"
          >
            <div className=" flex flex-row justify-center items-center">
              <img
                className="mx-3 rounded-r-full h-10"
                src={`https://countryflagsapi.com/svg/${match.homeTeam.toLowerCase()}`}
                alt={match.homeTeam}
              />
              <h3 className="text-lg font-semibold">
                {" "}
                {match.homeTeam} - {match.awayTeam}{" "}
              </h3>
              <img
                className="mx-3 rounded-l-full h-10"
                src={`https://countryflagsapi.com/svg/${match.awayTeam.toLowerCase()}`}
                alt={match.awayTeam}
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
              <Button
                arialabel="Start"
                disabled={match.gameStarted}
                onClick={() => handleStartGame(match.id)}
              >
                <BsPlayCircle size={28} />
              </Button>
              <Button
                arialabel="Update"
                disabled={!match.gameStarted || match.gameUpdated}
                onClick={() => handleUpdateGame(match.id)}
              >
                <RxUpdate size={28} />
              </Button>
              <Button
                arialabel="Finish"
                disabled={!match.gameStarted || !match.gameUpdated}
                onClick={() => handleFinishGame(match.id)}
              >
                <BsCheck2Circle size={28} />
              </Button>
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default Matches;
