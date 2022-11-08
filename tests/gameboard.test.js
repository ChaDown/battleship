/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import { gameboard1 } from '../src/gameboard';

gameboard1.placeShip('destroyer', [
  [1, 1],
  [1, 2],
]);
gameboard1.receiveAttack([1, 1]);
gameboard1.receiveAttack([1, 2]);

test('Board should have 100 squares', () => {
  expect(gameboard1.gameboardArr.length).toBe(100);
});

test('First square should be [1,1]', () => {
  expect(gameboard1.gameboardArr[0].coords).toEqual([1, 1]);
});

test('Last square should be [10,10]', () => {
  expect(gameboard1.gameboardArr[99]).toEqual({
    coords: [10, 10],
    hit: false,
    ship: false,
  });
});

test('Gameboard creates a ship and assigns coords', () => {
  expect(gameboard1.shipsArr[0]).toMatchObject({
    coords: [
      [1, 1],
      [1, 2],
    ],
    type: 'destroyer',
    shipLength: 2,
    timesHit: 2,
  });
});

test('Placing a ship updates coords in gameboard array', () => {
  expect(gameboard1.gameboardArr[0].ship).toBeTruthy();
  expect(gameboard1.gameboardArr[1].ship).toBeTruthy();
  expect(gameboard1.gameboardArr[2].ship).toBe(false);
});

test('receive attack marks gameboard tile as hit: true', () => {
  expect(gameboard1.gameboardArr[0].hit).toBe(true);
  expect(gameboard1.gameboardArr[1].hit).toBe(true);
  expect(gameboard1.gameboardArr[2].hit).toBe(false);
});

test('Receive attack sends hit function to hit ship', () => {
  expect(gameboard1.shipsArr[0].timesHit).toBe(2);
});

test('If all ships in ships array are sunk, then game is over.', () => {
  console.log(gameboard1.shipsArr);
  expect(gameboard1.checkGameOver()).toBe(true);
});
