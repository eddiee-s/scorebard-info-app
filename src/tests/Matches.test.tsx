import React from 'react'
import { render, screen } from "@testing-library/react";
import Matches from "../components/Matches"
import { matchesMockData } from "../data/mockMatchesData";


/********************* BUTONS ENABLED/DISABLED STATUS TESTING ****************/
test('check if "start / PLAY" button is enabled', async () => {
  render(
      <Matches data={matchesMockData} />

  );
  const buttonElement = screen.getAllByRole("button", {name:'Start'})[0];
  expect(buttonElement).toBeEnabled();
});

test('check if "update" button is disabled', async () => {
  render(
      <Matches data={matchesMockData} />

  );
  const buttonElement = screen.getAllByRole("button", {name:'Update'})[0];
  expect(buttonElement).toBeDisabled();
});

test('check if "finish" button is disabled', async () => {
  render(
      <Matches data={matchesMockData} />

  );
  const buttonElement = screen.getAllByRole("button", {name:'Finish'})[0];
  expect(buttonElement).toBeDisabled();
});
