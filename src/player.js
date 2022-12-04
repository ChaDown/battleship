import { Gameboard } from './gameboard';

export const Player = function () {
  const gameboard = Gameboard();

  const usedMovesArr = [];

  function makeRandomMove() {
    const randomIndex = Math.trunc(Math.random() * 100);
    if (!usedMovesArr.includes(randomIndex)) {
      usedMovesArr.push(randomIndex);
      return randomIndex;
    }
    makeRandomMove();
  }

  return {
    makeRandomMove,
    gameboard,
    usedMovesArr,
  };
};

export const user = Player();
export const AI = Player();
