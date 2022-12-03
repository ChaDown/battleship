import { gameLoop } from './index';

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

export function renderBoards(gameboard1, gameboard2) {
  const userBoard = document.querySelector('.user-board');
  const AIBoard = document.querySelector('.AI-board');

  userBoard.innerHTML = createGameboardMarkup(
    gameboard1.gameboardArr,
    false,
    true
  );
  AIBoard.innerHTML = createGameboardMarkup(gameboard2.gameboardArr, true);

  const enemyTilesArr = document.querySelectorAll('.enemy');
  enemyTilesArr.forEach((tile) =>
    tile.addEventListener('click', (e) => gameLoop(e))
  );
}
