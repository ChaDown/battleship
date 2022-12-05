import { Player } from '../src/player';

const player = Player();
player.gameboard.placeShip('destroyer', [
  [1, 1],
  [1, 2],
]);
player.gameboard.receiveAttack(1);

test('Random Move creates a number between 0-99', () => {
  expect(player.makeRandomMove()).toBeGreaterThanOrEqual(0);
  expect(player.makeRandomMove()).toBeLessThan(100);
});

test('Smart move selects a tile adjacent to hit tile', () => {
  expect(player.makeSmartMove()).toBeGreaterThanOrEqual(2);
  expect(player.makeSmartMove()).toBeLessThan(12);
});
