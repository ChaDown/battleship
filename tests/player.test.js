import { Player } from '../src/player';

const player = Player();

player.makeRandomMove();
player.makeRandomMove();
player.makeRandomMove();

test('There are now 3 moves in the usedMovesArr', () => {
  expect(player.usedMovesArr.length).toBe(3);
});
