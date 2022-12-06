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

  function isValid(index) {
    if (index >= 0 && index < 100 && !gameboard.gameboardArr[index].hit) {
      return true;
    }
    return false;
  }

  function makeSmartMove() {
    const hitShipsIndexArr = [];
    const possibleShipsIndexArr = [];

    // Add to array of all moves where a ship was hit
    gameboard.gameboardArr.forEach((el, ind) => {
      if (el.hit && el.ship) hitShipsIndexArr.push(ind);
    });

    if (hitShipsIndexArr.length > 0) {
      // Check if there are already any adjacent hits, and try hit either side if available.
      for (let i = 0; i < hitShipsIndexArr.length; i++) {
        if (hitShipsIndexArr[i] + 1 === hitShipsIndexArr[i + 1]) {
          if (isValid(hitShipsIndexArr[i] - 1)) return hitShipsIndexArr[i] - 1;
          if (isValid(hitShipsIndexArr[i] + 2)) return hitShipsIndexArr[i] + 2;
        }
        if (hitShipsIndexArr.includes(hitShipsIndexArr[i] + 10)) {
          if (isValid(hitShipsIndexArr[i] - 10)) {
            return hitShipsIndexArr[i] - 10;
          }
          if (isValid(hitShipsIndexArr[i] + 20)) {
            return hitShipsIndexArr[i] + 20;
          }
        }
      }

      // If there are no more ways to "continue" adjacently, choose another hit ship(with no adjacent hits)
      // Do this by finding all non-adj hits.
      const nonAdjHitShipsIndex = hitShipsIndexArr.filter((el) => {
        if (hitShipsIndexArr.includes(el - 1)) return false;
        if (hitShipsIndexArr.includes(el + 1)) return false;
        if (hitShipsIndexArr.includes(el - 10)) return false;
        if (hitShipsIndexArr.includes(el + 10)) return false;
        return true;
      });

      if (nonAdjHitShipsIndex.length === 0) return makeRandomMove();
      // Add to array of all valid moves adjacent to hit ships
      nonAdjHitShipsIndex.forEach((el) => {
        const rightMove = el + 1;
        const leftMove = el - 1;
        // Make sure lateral moves on same row
        function getSmartMove(mov) {
          const smartMove =
            String(mov).length === 1 || String(mov)[0] === String(el)[0]
              ? mov
              : '';
          return smartMove;
        }
        const smartRightMove = getSmartMove(rightMove);
        const smartLeftMove = getSmartMove(leftMove);
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

      // If there are some possible moves, randomly choose one.

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
