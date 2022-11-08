import { Ship } from './ship';

const Gameboard = function () {
  // Make an array with 100 square objects, with x and 7 coords.
  function makeGrid() {
    const gameGrid = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = { coords: [i + 1, j + 1], hit: false, ship: false };
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

    this.shipsArr.push(deployedShip);

    markCoords(coords, type);

    return deployedShip;
  }

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

  return {
    receiveAttack,
    gameboardArr,
    placeShip,
    markCoords,
    shipsArr,
    checkGameOver,
  };
};

export const gameboard1 = Gameboard();
