/* eslint-disable no-plusplus */
import { gameboard1 } from './gameboard';

export function Ship(type, length, timesHit, coords) {
  const isSunk = () => (timesHit === length ? true : false);
  return {
    type,
    length,
    timesHit,
    isSunk,
    coords,
  };
}
// Fix hit function
