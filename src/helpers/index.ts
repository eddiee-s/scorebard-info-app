import { MatchDataTypes } from '../types'

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