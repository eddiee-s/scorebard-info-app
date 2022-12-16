import { MatchDataTypes } from '../types'

export const sortFinishedMatches = (finishedMatches: MatchDataTypes[]) => {
  if (!finishedMatches) {
    return [];
  }

  const sortedMatches = [...finishedMatches];

  return sortedMatches.sort((a, b) => {
    const homeScore = a.updatedHomeScore + a.updatedAwayScore;
    const awayScore = b.updatedHomeScore + b.updatedAwayScore;

    if (homeScore > awayScore) {
      return -1;
    }
    if (homeScore < awayScore) {
      return 1;
    }
    return -1;
  });
};


  export const updateGameStatus = (
    data: MatchDataTypes[],
    id: string,
    status: string | "start" | "update" | "finish"
  ) => {
    const gameStatusUpdated = data.map((selMatch: MatchDataTypes) => {
      if (selMatch.id === id) {
        switch (status) {
          case "start":
            selMatch.gameStarted = true;
            break;
          case "update":
            selMatch.gameUpdated = true;
            break;
          case "finish":
            selMatch.gameFinished = true;
            break;
        }
      }
      return selMatch;
    });
    return gameStatusUpdated;
  };