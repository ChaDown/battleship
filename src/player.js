export const Player = function () {
  function makeRandomMove(gameboard) {
    const randomIndex = Math.trunc(Math.random() * gameboard.length);

    gameboard[randomIndex].hit = true;
  }

  return {
    makeRandomMove,
  };
};
