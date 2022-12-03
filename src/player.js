import { Gameboard } from './gameboard';

const Player = function () {
  const gameboard = Gameboard();

  function makeRandomMove() {
    const randomIndex = Math.trunc(Math.random() * 100);

    return randomIndex;
  }

  return {
    makeRandomMove,
    gameboard,
  };
};

export const user = Player();
export const AI = Player();
