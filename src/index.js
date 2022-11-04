/* eslint-disable no-plusplus */
export function Ship(type, length, timesHit) {
  const hit = () => ++timesHit;
  const isSunk = () => (timesHit === length ? true : false);
  return {
    type,
    length,
    timesHit,
    hit,
    isSunk,
  };
}
// Fix hit function
