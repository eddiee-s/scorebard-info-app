import { sortFinishedMatches, updateGameStatus } from "../helpers/index";
import { MatchDataTypes } from "../types"


/*********************GAME STATUS FUNCTION TEST ****************/
//!MOCK TEST DATA
const statusMockDataInput = [
  {
    id: "1",
    homeTeam: "Mexico",
    awayTeam: "Canada",
    updatedHomeScore: 0,
    updatedAwayScore: 5,
    gameStarted: false,
    gameUpdated: false,
    gameFinished: false,
  },
];
const statusMockDataOutput = [
  {
    id: "1",
    homeTeam: "Mexico",
    awayTeam: "Canada",
    updatedHomeScore: 0,
    updatedAwayScore: 5,
    gameStarted: true,
    gameUpdated: false,
    gameFinished: false,
  },
];

test(`Game Status Change Test`, () => {
  let gameStatusTest = updateGameStatus(statusMockDataInput as MatchDataTypes [], "1", "start");
  expect(gameStatusTest).toStrictEqual(statusMockDataOutput);
});


/*********************FINISHED MATCH FUNCTION TEST ****************/
//!MOCK TEST DATA
const matchesMockDataInput = [
  {
    id: "1",
    homeTeam: "Mexico",
    awayTeam: "Canada",
    updatedHomeScore: 0,
    updatedAwayScore: 5,
  },
  {
    id: "2",
    homeTeam: "Spain",
    awayTeam: "Brazil",
    updatedHomeScore: 10,
    updatedAwayScore: 2,
  },
  {
    id: "3",
    homeTeam: "Germany",
    awayTeam: "France",
    updatedHomeScore: 2,
    updatedAwayScore: 2,
  },
  {
    id: "4",
    homeTeam: "Uruguay",
    awayTeam: "Italy",
    updatedHomeScore: 6,
    updatedAwayScore: 6,
  },
  {
    id: "5",
    homeTeam: "Argentina",
    awayTeam: "Australia",
    updatedHomeScore: 3,
    updatedAwayScore: 1,
  },
];
const matchesMockDataOutput = [
  {
    id: "4",
    homeTeam: "Uruguay",
    awayTeam: "Italy",
    updatedHomeScore: 6,
    updatedAwayScore: 6,
  },
  {
    id: "2",
    homeTeam: "Spain",
    awayTeam: "Brazil",
    updatedHomeScore: 10,
    updatedAwayScore: 2,
  },
  {
    id: "1",
    homeTeam: "Mexico",
    awayTeam: "Canada",
    updatedHomeScore: 0,
    updatedAwayScore: 5,
  },
  {
    id: "5",
    homeTeam: "Argentina",
    awayTeam: "Australia",
    updatedHomeScore: 3,
    updatedAwayScore: 1,
  },
  {
    id: "3",
    homeTeam: "Germany",
    awayTeam: "France",
    updatedHomeScore: 2,
    updatedAwayScore: 2,
  },
];

test(`Sorting finished Matches Test`, () => {
  let sortTest = sortFinishedMatches(matchesMockDataInput as MatchDataTypes []);
  expect(sortTest).toStrictEqual(matchesMockDataOutput);
});
