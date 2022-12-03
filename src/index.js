/* eslint-disable wrap-iife */
//import { userGameboard, AIGameboard } from './gameboard';
import { user, AI } from './player';
import { renderBoards, getClickedTile } from './DOM';
import css from './style.css';

function init() {
  renderBoards(user.gameboard, AI.gameboard);

  console.log(user.gameboard.shipsArr);

  // Start btn
  const startBtn = document.querySelector('.start-btn');
  startBtn.addEventListener('click', startHandler);

  function startHandler() {
    user.gameboard.clearShipsAndHits();
    AI.gameboard.clearShipsAndHits();

    user.gameboard.placeAllRandomShips();
    AI.gameboard.placeAllRandomShips();

    console.log(user.gameboard.shipsArr);

    renderBoards(user.gameboard, AI.gameboard);

    startBtn.textContent = 'Reset Game';
  }
}

init();

export function gameLoop(e) {
  const tileIndex = e.target.dataset.index;
  console.log(tileIndex);

  // Send hit to AI Gameboard
  AI.gameboard.receiveAttack(tileIndex);
  renderBoards(user.gameboard, AI.gameboard);

  // Wait one sec, send random hit to user gameboard
  const randomMoveIndex = user.makeRandomMove();
  setTimeout(() => {
    user.gameboard.receiveAttack(randomMoveIndex);
    renderBoards(user.gameboard, AI.gameboard);
  }, 1000);

  console.log(AI.gameboard);
}
