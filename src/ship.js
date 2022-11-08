/* eslint-disable no-plusplus */

export function Ship(type, shipLength, timesHit, coords) {
  function isSunk() {
    return this.timesHit === this.shipLength;
  }
  function hit() {
    this.timesHit += 1;
  }
  return {
    type,
    shipLength,
    timesHit,
    hit,
    isSunk,
    coords,
  };
}
// Fix hit function
