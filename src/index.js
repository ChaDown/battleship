import { Gameboard } from './gameboard';
import { Player } from './player';

function init() {
  const userGameboard = Gameboard();
  const AIGameboard = Gameboard();

  const playerUser = Player();
  const playerAI = Player();

  // Place ships
  AIGameboard.placeAllRandomShips();
  userGameboard.placeAllRandomShips();

  console.log(AIGameboard.gameboardArr);
}

init();
