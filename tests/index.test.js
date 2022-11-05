import { Ship } from '../src/index';

const testShip = Ship('destroyer', 4, 0);

// Test the ship factory function
test('Ships type, length and times hit work', () => {
  expect(testShip.length).toBe(4);
});

test('Ships type, length and times hit work', () => {
  expect(testShip.type).toBe('destroyer');
});

test('Ships type, length and times hit work', () => {
  expect(testShip.timesHit).toBe(0);
});

test('Is sunk function returns false', () => {
  expect(testShip.isSunk()).toBe(false);
});
