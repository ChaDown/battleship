/* eslint-disable wrap-iife */

import { user, AI } from './player';
import { renderBoards, toggleGameOver } from './DOM';
import css from './style.css';

function init() {
  renderBoards(user.gameboard, AI.gameboard, true);

  // Start btn & new game after end btn
  const startBtn = document.querySelector('.start-btn');
  const newGameBtn = document.querySelector('.new-game');
  startBtn.addEventListener('click', startHandler);
  newGameBtn.addEventListener('click', () => {
    startHandler();
    toggleGameOver();
  });

  function startHandler() {
    user.gameboard.clearShipsAndHits();
    AI.gameboard.clearShipsAndHits();

    user.gameboard.placeAllRandomShips();
    AI.gameboard.placeAllRandomShips();

    renderBoards(user.gameboard, AI.gameboard);

    startBtn.textContent = 'Reset Board';
  }
}

init();

export default function gameLoop(e) {
  const tileIndex = e.target.dataset.index;

  // Send hit to AI Gameboard
  AI.gameboard.receiveAttack(tileIndex);
  renderBoards(user.gameboard, AI.gameboard, false);
  if (AI.gameboard.checkGameOver()) toggleGameOver(false);
  // If a ship is hit, end function.
  if (AI.gameboard.gameboardArr[tileIndex].ship) return;

  // Wait one sec, send random hit to user gameboard
  (function AIturn() {
    setTimeout(() => {
      const smartMoveIndex = user.makeSmartMove();
      user.gameboard.receiveAttack(smartMoveIndex);
      renderBoards(user.gameboard, AI.gameboard);
      if (AI.gameboard.checkGameOver()) toggleGameOver(true);
      // If a ship isn't hit, break loop. If not recall this fn.
      if (!user.gameboard.gameboardArr[smartMoveIndex].ship) return;
      AIturn();
    }, 500);
  })();
}
