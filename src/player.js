import { Gameboard } from './gameboard';

export const Player = function () {
  const gameboard = Gameboard();

  function makeRandomMove() {
    // Make array of indexes of unhit tiles
    const validIndexArr = [];
    gameboard.gameboardArr.forEach((el, index) => {
      if (!el.hit) validIndexArr.push(index);
    });
    const randomIndex = Math.trunc(Math.random() * validIndexArr.length);
    const randomTileIndex = validIndexArr[randomIndex];

    return randomTileIndex;
  }

  function makeSmartMove() {
    const hitShipsIndexArr = [];
    const possibleShipsIndexArr = [];

    // Add to array of all moves where a ship was hit
    gameboard.gameboardArr.forEach((el, ind) => {
      if (el.hit && el.ship) hitShipsIndexArr.push(ind);
    });

    if (hitShipsIndexArr.length > 0) {
      // Add to array of all valid moves adjacent to hit ships
      hitShipsIndexArr.forEach((el) => {
        const rightMove = el + 1;
        const leftMove = el - 1;
        // Make sure lateral moves on same row
        const smartRightMove =
          String(rightMove).length === 1 ||
          String(rightMove)[0] === String(el)[0]
            ? rightMove
            : '';
        const smartLeftMove =
          String(leftMove).length === 1 || String(leftMove)[0] === String(el)[0]
            ? leftMove
            : '';
        const upMove = el - 10 >= 0 ? el - 10 : '';
        const downMove = el + 10 < 100 ? el + 10 : '';

        const possMoves = [smartRightMove, smartLeftMove, upMove, downMove];

        // If they are truthy and not already hit, add them to the possibleShips arr
        possMoves.forEach((move) => {
          if (move && !gameboard.gameboardArr[move].hit) {
            possibleShipsIndexArr.push(move);
          }
        });
      });

      // If there are some possible moves, choose one.

      if (possibleShipsIndexArr.length > 0) {
        const randomSmartMoveIndex = Math.trunc(
          Math.random() * possibleShipsIndexArr.length
        );

        return possibleShipsIndexArr[randomSmartMoveIndex];
      }
      return makeRandomMove();
    }
    return makeRandomMove();
  }

  return {
    makeRandomMove,
    gameboard,
    makeSmartMove,
  };
};

export const user = Player();
export const AI = Player();
