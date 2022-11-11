/* eslint-disable max-len */
import { Ship } from './ship';

export const Gameboard = function () {
  // Make an array with 100 square objects, with x and 7 coords.
  function makeGrid() {
    const gameGrid = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = {
          coords: [i + 1, j + 1],
          hit: false,
          ship: false,
          row: i + 1,
          col: j + 1,
        };
        gameGrid.push(square);
      }
    }
    return gameGrid;
  }
  const gameboardArr = makeGrid();

  function getShipLength(type) {
    if (type === 'carrier') return 5;
    if (type === 'battleship') return 4;
    if (type === 'cruiser' || type === 'submarine') return 3;
    if (type === 'destroyer') return 2;
  }

  // Takes a set of coords and marks ship:true on them in gameboardArr.
  function markCoords(coords, type) {
    coords.forEach((obj) => {
      const squareIndex = gameboardArr.findIndex(
        (el) => JSON.stringify(el.coords) === JSON.stringify(obj)
      );
      gameboardArr[squareIndex].ship = type;
    });
  }

  const shipsArr = [];

  function placeShip(type, coords) {
    const deployedShip = Ship(type, getShipLength(type), 0, coords);

    shipsArr.push(deployedShip);

    markCoords(coords, type);

    return deployedShip;
  }

  // function getRandomCoords(n) {
  //   const coords1 = [
  //     [Math.trunc(Math.random() * 10 + 1), Math.trunc(Math.random() * 10 + 1)],
  //   ];
  //   for (let i = 0; i < n; i++) {
  //     const coords2 = [coords1[0][0] + 1];
  //   }
  // }

  // function randomPlaceShips(shipType) {}

  function receiveAttack(coord) {
    const squareIndex = this.gameboardArr.findIndex(
      (el) => JSON.stringify(el.coords) === JSON.stringify(coord)
    );
    // Mark as hit
    this.gameboardArr[squareIndex].hit = true;
    // Check if a ship is there, if so send hit function to ship.
    if (this.gameboardArr[squareIndex].ship) {
      const hitShip = this.shipsArr.find(
        (ship) => ship.type === this.gameboardArr[squareIndex].ship
      );
      hitShip.hit();
    }
  }

  function checkGameOver() {
    const notSunkArr = this.shipsArr.filter((el) => el.isSunk() === false);

    if (notSunkArr.length > 0) return false;
    return true;
  }

  function createDirectionIndexes(shipLength, firstTileIndex) {
    function checkDirection(move) {
      // Add all valid moves to an array, if the array is of sufficient length as the ship, then we can process it as valid.
      const provisionalIndexArr = [firstTileIndex];
      for (let i = 1; i < shipLength; i++) {
        const nextTile = gameboardArr[firstTileIndex + move * i];
        // For up and down moves
        if (move === -10 || move === +10) {
          if (nextTile && !nextTile.ship) {
            provisionalIndexArr.push(firstTileIndex + move * i);
          }
        }
        // For horizontal moves
        if (move === -1 || move === +1) {
          if (
            nextTile &&
            !nextTile.ship &&
            nextTile.row === gameboardArr[firstTileIndex].row
          ) {
            provisionalIndexArr.push(firstTileIndex + move * i);
          }
        }
        if (provisionalIndexArr.length === shipLength) {
          return provisionalIndexArr;
        }
      }
    }
    // Working in gameboardArr, move up - index = - 10. move down = index = + 10. move left - index = - 1. move right - index = +1
    const moves = [-10, +10, -1, +1];
    const validMoves = [];

    moves.forEach((mov) => {
      if (checkDirection(mov)) {
        validMoves.push(checkDirection(mov));
      }
    });

    const randomMove =
      validMoves[Math.trunc(Math.random() * validMoves.length)];

    return randomMove;
  }

  function placeRandomShip(shipType, shipLength) {
    let firstTile = gameboardArr[Math.trunc(Math.random() * 100)];
    // Keep generating first tile until we find one with no ship.
    while (firstTile.ship) {
      firstTile = gameboardArr[Math.trunc(Math.random() * 100)];
    }
    const firstTileIndex = gameboardArr.findIndex(
      (el) => JSON.stringify(el) === JSON.stringify(firstTile)
    );

    const shipTileIndexes = createDirectionIndexes(shipLength, firstTileIndex);

    const shipCoords = [];

    for (let i = 0; i < shipTileIndexes.length; i++) {
      shipCoords.push(gameboardArr[shipTileIndexes[i]].coords);
    }

    placeShip(shipType, shipCoords);
  }

  function placeAllRandomShips() {
    placeRandomShip('destroyer', 2);
    placeRandomShip('submarine', 3);
    placeRandomShip('cruiser', 3);
    placeRandomShip('battleship', 4);
    placeRandomShip('carrier', 5);
  }

  return {
    receiveAttack,
    gameboardArr,
    placeShip,
    markCoords,
    shipsArr,
    checkGameOver,
    placeRandomShip,
    placeAllRandomShips,
  };
};

export const gameboard1 = Gameboard();
