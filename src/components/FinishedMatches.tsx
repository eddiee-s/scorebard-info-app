import { FC } from "react";
import { MatchDataTypes } from "../types";

const FinishedMatches: FC<{ data: MatchDataTypes[] }> = ({ data }) => {
  return (
    <div className="ml-2 px-5 pb-5 shadow-2xl">
      <h2 className="text-center p-5 text-xl text font-bold">
        Summary of games by <span className="uppercase">total score</span>
      </h2>
      {data.length === 0 && (
        <div className="flex h-3/4 items-center justify-center">
          <h3 className=""> There are no finished matches yet</h3>
        </div>
      )}
      <ul className="list">
        {data.map((match) => (
          <div
            className=" flex flex-col justify-center items-center py-5 border"
            key={match.id}
          >
            <li className=" flex flex-row justify-center items-center">
              <img
                className="mx-3 rounded-r-full h-10"
                src={`https://countryflagsapi.com/svg/${match.homeTeam.toLowerCase()}`}
                alt={match.homeTeam}
              />{" "}
              <h3 className="text-lg font-semibold">
                {" "}
                {match.homeTeam} - {match.awayTeam}{" "}
              </h3>
              <img
                className="mx-3 rounded-l-full h-10"
                src={`https://countryflagsapi.com/svg/${match.awayTeam.toLowerCase()}`}
                alt={match.awayTeam}
              />
            </li>
            <span>
              <h3 className="text-red-600 text-lg font-semibold">
                {match.updatedHomeScore} - {match.updatedAwayScore}
              </h3>
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FinishedMatches;
