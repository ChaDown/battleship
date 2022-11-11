/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"gameboard1\": () => (/* binding */ gameboard1)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable max-len */\n\n\nconst Gameboard = function () {\n  // Make an array with 100 square objects, with x and 7 coords.\n  function makeGrid() {\n    const gameGrid = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const square = {\n          coords: [i + 1, j + 1],\n          hit: false,\n          ship: false,\n          row: i + 1,\n          col: j + 1,\n        };\n        gameGrid.push(square);\n      }\n    }\n    return gameGrid;\n  }\n  const gameboardArr = makeGrid();\n\n  function getShipLength(type) {\n    if (type === 'carrier') return 5;\n    if (type === 'battleship') return 4;\n    if (type === 'cruiser' || type === 'submarine') return 3;\n    if (type === 'destroyer') return 2;\n  }\n\n  // Takes a set of coords and marks ship:true on them in gameboardArr.\n  function markCoords(coords, type) {\n    coords.forEach((obj) => {\n      const squareIndex = gameboardArr.findIndex(\n        (el) => JSON.stringify(el.coords) === JSON.stringify(obj)\n      );\n      gameboardArr[squareIndex].ship = type;\n    });\n  }\n\n  const shipsArr = [];\n\n  function placeShip(type, coords) {\n    const deployedShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(type, getShipLength(type), 0, coords);\n\n    shipsArr.push(deployedShip);\n\n    markCoords(coords, type);\n\n    return deployedShip;\n  }\n\n  // function getRandomCoords(n) {\n  //   const coords1 = [\n  //     [Math.trunc(Math.random() * 10 + 1), Math.trunc(Math.random() * 10 + 1)],\n  //   ];\n  //   for (let i = 0; i < n; i++) {\n  //     const coords2 = [coords1[0][0] + 1];\n  //   }\n  // }\n\n  // function randomPlaceShips(shipType) {}\n\n  function receiveAttack(coord) {\n    const squareIndex = this.gameboardArr.findIndex(\n      (el) => JSON.stringify(el.coords) === JSON.stringify(coord)\n    );\n    // Mark as hit\n    this.gameboardArr[squareIndex].hit = true;\n    // Check if a ship is there, if so send hit function to ship.\n    if (this.gameboardArr[squareIndex].ship) {\n      const hitShip = this.shipsArr.find(\n        (ship) => ship.type === this.gameboardArr[squareIndex].ship\n      );\n      hitShip.hit();\n    }\n  }\n\n  function checkGameOver() {\n    const notSunkArr = this.shipsArr.filter((el) => el.isSunk() === false);\n\n    if (notSunkArr.length > 0) return false;\n    return true;\n  }\n\n  function createDirectionIndexes(shipLength, firstTileIndex) {\n    function checkDirection(move) {\n      // Add all valid moves to an array, if the array is of sufficient length as the ship, then we can process it as valid.\n      const provisionalIndexArr = [firstTileIndex];\n      for (let i = 1; i < shipLength; i++) {\n        const nextTile = gameboardArr[firstTileIndex + move * i];\n        // For up and down moves\n        if (move === -10 || move === +10) {\n          if (nextTile && !nextTile.ship) {\n            provisionalIndexArr.push(firstTileIndex + move * i);\n          }\n        }\n        // For horizontal moves\n        if (move === -1 || move === +1) {\n          if (\n            nextTile &&\n            !nextTile.ship &&\n            nextTile.row === gameboardArr[firstTileIndex].row\n          ) {\n            provisionalIndexArr.push(firstTileIndex + move * i);\n          }\n        }\n        if (provisionalIndexArr.length === shipLength) {\n          return provisionalIndexArr;\n        }\n      }\n    }\n    // Working in gameboardArr, move up - index = - 10. move down = index = + 10. move left - index = - 1. move right - index = +1\n    const moves = [-10, +10, -1, +1];\n    const validMoves = [];\n\n    moves.forEach((mov) => {\n      if (checkDirection(mov)) {\n        validMoves.push(checkDirection(mov));\n      }\n    });\n\n    const randomMove =\n      validMoves[Math.trunc(Math.random() * validMoves.length)];\n\n    return randomMove;\n  }\n\n  function placeRandomShip(shipType, shipLength) {\n    let firstTile = gameboardArr[Math.trunc(Math.random() * 100)];\n    // Keep generating first tile until we find one with no ship.\n    while (firstTile.ship) {\n      firstTile = gameboardArr[Math.trunc(Math.random() * 100)];\n    }\n    const firstTileIndex = gameboardArr.findIndex(\n      (el) => JSON.stringify(el) === JSON.stringify(firstTile)\n    );\n\n    const shipTileIndexes = createDirectionIndexes(shipLength, firstTileIndex);\n\n    const shipCoords = [];\n\n    for (let i = 0; i < shipTileIndexes.length; i++) {\n      shipCoords.push(gameboardArr[shipTileIndexes[i]].coords);\n    }\n\n    placeShip(shipType, shipCoords);\n  }\n\n  function placeAllRandomShips() {\n    placeRandomShip('destroyer', 2);\n    placeRandomShip('submarine', 3);\n    placeRandomShip('cruiser', 3);\n    placeRandomShip('battleship', 4);\n    placeRandomShip('carrier', 5);\n  }\n\n  return {\n    receiveAttack,\n    gameboardArr,\n    placeShip,\n    markCoords,\n    shipsArr,\n    checkGameOver,\n    placeRandomShip,\n    placeAllRandomShips,\n  };\n};\n\nconst gameboard1 = Gameboard();\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nfunction init() {\n  const userGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  const AIGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n\n  const playerUser = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();\n  const playerAI = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)();\n\n  // Place ships\n  AIGameboard.placeAllRandomShips();\n  userGameboard.placeAllRandomShips();\n\n  console.log(AIGameboard.gameboardArr);\n}\n\ninit();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nconst Player = function () {\n  function makeRandomMove(gameboard) {\n    const randomIndex = Math.trunc(Math.random() * gameboard.length);\n\n    gameboard[randomIndex].hit = true;\n  }\n\n  return {\n    makeRandomMove,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n\nfunction Ship(type, shipLength, timesHit, coords) {\n  function isSunk() {\n    return this.timesHit === this.shipLength;\n  }\n  function hit() {\n    this.timesHit += 1;\n  }\n  return {\n    type,\n    shipLength,\n    timesHit,\n    hit,\n    isSunk,\n    coords,\n  };\n}\n// Fix hit function\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;