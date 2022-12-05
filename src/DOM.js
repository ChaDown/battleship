import gameLoop from './index';

function createGameboardMarkup(gameboard, AI = false, friendly = false) {
  let html = '';
  gameboard.forEach((el, index) => {
    const markup = `<div data-index=${index} class="tile ${
      el.ship ? 'ship' : ''
    } ${el.hit ? 'hit' : ''} ${AI ? 'enemy' : ''} ${
      friendly ? 'friendly' : ''
    }" ></div>`;

    html += markup;
  });
  return html;
}

export function renderBoards(gameboard1, gameboard2, firstRender = false) {
  const userBoard = document.querySelector('.user-board');
  const AIBoard = document.querySelector('.AI-board');

  userBoard.innerHTML = createGameboardMarkup(
    gameboard1.gameboardArr,
    false,
    true
  );
  AIBoard.innerHTML = createGameboardMarkup(gameboard2.gameboardArr, true);

  if (!firstRender) {
    const enemyTilesArr = document.querySelectorAll('.enemy');
    setTimeout(() => {
      enemyTilesArr.forEach((tile) => {
        if (!tile.classList.contains('hit')) {
          tile.addEventListener('click', (e) => gameLoop(e));
        }
      });
    }, 550);
  }
}

export function toggleGameOver(AIwin) {
  const gameOverModal = document.querySelector('.game-over');
  const overlay = document.querySelector('.overlay-container');

  const text = AIwin
    ? 'Defeat! We may have lost the battle but not the war. Regroup and attack!'
    : 'Victory! Another step towards our mission. We sail on!';

  gameOverModal.childNodes[0].textContent = text;

  overlay.classList.toggle('overlay');
  gameOverModal.classList.toggle('hidden');
}
