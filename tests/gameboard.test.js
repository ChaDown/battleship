/* eslint-disable no-undef */
/* eslint-disable comma-dangle */

import { gameboard1 } from '../src/gameboard';

test('Board should have 100 squares', () => {
  expect(gameboard1.gameboardArr.length).toBe(100);
});

test('First square should be [1,1]', () => {
  expect(gameboard1.gameboardArr[0]).toEqual({
    coords: [1, 1],
    hit: false,
    ship: false,
  });
});

test('Last square should be [10,10]', () => {
  expect(gameboard1.gameboardArr[99]).toEqual({
    coords: [10, 10],
    hit: false,
    ship: false,
  });
});

test('Gameboard creates a ship and assigns coords', () => {
  expect(
    gameboard1.placeShip('destroyer', [
      [1, 1],
      [1, 2],
    ])
  ).toMatchObject({
    coords: [
      [1, 1],
      [1, 2],
    ],
    type: 'destroyer',
    length: 2,
    timesHit: 0,
  });
});

// test('Mark coords function marks ships coordinates on gamboardArr - ship:true', () => {
//   gameboard1.markCoords([10, 10]);

//   expect(gameboard1.gameboardArr[99].ship).toBe(true);
// });

test('Placing a ship updates coords in gameboard array', () => {
  gameboard1.placeShip('destroyer', [
    [1, 1],
    [1, 2],
  ]);

  expect(gameboard1.gameboardArr[0].ship).toBe(true);
  expect(gameboard1.gameboardArr[1].ship).toBe(true);
  expect(gameboard1.gameboardArr[2].ship).toBe(false);
});
