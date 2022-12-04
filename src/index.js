/* eslint-disable wrap-iife */

import { user, AI } from './player';
import renderBoards from './DOM';
import css from './style.css';

function init() {
  renderBoards(user.gameboard, AI.gameboard);

  // Start btn
  const startBtn = document.querySelector('.start-btn');
  startBtn.addEventListener('click', startHandler);

  function startHandler() {
    user.gameboard.clearShipsAndHits();
    AI.gameboard.clearShipsAndHits();

    user.gameboard.placeAllRandomShips();
    AI.gameboard.placeAllRandomShips();

    renderBoards(user.gameboard, AI.gameboard);

    startBtn.textContent = 'Reset Game';

    console.log(AI.gameboard, user.gameboard);
  }
}

init();

export default function gameLoop(e) {
  const tileIndex = e.target.dataset.index;

  // Send hit to AI Gameboard
  AI.gameboard.receiveAttack(tileIndex);
  renderBoards(user.gameboard, AI.gameboard);
  if (AI.gameboard.gameboardArr[tileIndex].ship) return;

  // Wait one sec, send random hit to user gameboard
  (function AIturn() {
    setTimeout(() => {
      const randomMoveIndex = user.makeRandomMove();
      user.gameboard.receiveAttack(randomMoveIndex);
      renderBoards(user.gameboard, AI.gameboard);
      // If a ship isn't hit, break loop. If not recall this fn.
      if (!user.gameboard.gameboardArr[randomMoveIndex].ship) return;
      AIturn();
    }, 1000);
  })();
}
