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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/navy.jpg */ \"./src/assets/navy.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: 'Saira Stencil One', sans-serif;\\n  font-size: 2rem;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  text-shadow: 0 0 1px rgb(255, 255, 255), 0 0 1px rgb(255, 255, 255),\\n    0 0 1px rgb(255, 255, 255), 0 0 1px rgb(255, 255, 255);\\n}\\n\\n.user-board,\\n.AI-board {\\n  display: grid;\\n  grid-template-columns: repeat(10, auto);\\n  grid-template-rows: repeat(10), auto;\\n  gap: none;\\n}\\n\\n.main-container {\\n  display: flex;\\n  justify-content: space-around;\\n  height: 100%;\\n  align-items: center;\\n  margin-top: 10vh;\\n  margin-bottom: 7vh;\\n}\\n\\n.tile {\\n  border: 0.5px solid rgba(40, 62, 84, 0.613);\\n  min-width: 10px;\\n  min-height: 10px;\\n  aspect-ratio: 1;\\n  overflow: hidden;\\n  font-size: 30%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(255, 255, 255, 0.708);\\n}\\n\\n.title {\\n  text-align: center;\\n  margin-bottom: 2vh;\\n}\\n\\n.LHS,\\n.RHS {\\n  width: 40vw;\\n}\\n\\n.tile.ship.friendly {\\n  background-color: rgb(61, 123, 173);\\n}\\n\\n.header {\\n  text-align: center;\\n  margin-top: 5vh;\\n}\\n\\n.hidden {\\n  background-color: white;\\n}\\n\\n.btn-container {\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.start-btn,\\n.new-game {\\n  margin-top: 10px;\\n  padding: 5px 20px;\\n  width: fit-content;\\n  background-color: rgb(212, 232, 254);\\n  border: 1px solid black;\\n  border-radius: 5px;\\n}\\n\\n.hit::before {\\n  content: 'o';\\n}\\n\\n.ship.hit::before {\\n  content: 'x';\\n}\\n\\n.ship.hit {\\n  border-color: red;\\n  background-color: crimson;\\n}\\n\\n.game-over {\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: fit-content;\\n  height: fit-content;\\n  border: black 2px solid;\\n  background-color: white;\\n  border-radius: 10px;\\n  padding: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: 9999;\\n  font-size: 1.2rem;\\n}\\n\\n.overlay {\\n  background-color: rgba(42, 42, 42, 0.841);\\n  z-index: 1000;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBoards\": () => (/* binding */ renderBoards),\n/* harmony export */   \"toggleGameOver\": () => (/* binding */ toggleGameOver)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createGameboardMarkup(gameboard, AI = false, friendly = false) {\n  let html = '';\n  gameboard.forEach((el, index) => {\n    const markup = `<div data-index=${index} class=\"tile ${\n      el.ship ? 'ship' : ''\n    } ${el.hit ? 'hit' : ''} ${AI ? 'enemy' : ''} ${\n      friendly ? 'friendly' : ''\n    }\" ></div>`;\n\n    html += markup;\n  });\n  return html;\n}\n\nfunction renderBoards(gameboard1, gameboard2, firstRender = false) {\n  const userBoard = document.querySelector('.user-board');\n  const AIBoard = document.querySelector('.AI-board');\n\n  userBoard.innerHTML = createGameboardMarkup(\n    gameboard1.gameboardArr,\n    false,\n    true\n  );\n  AIBoard.innerHTML = createGameboardMarkup(gameboard2.gameboardArr, true);\n\n  if (!firstRender) {\n    const enemyTilesArr = document.querySelectorAll('.enemy');\n    setTimeout(() => {\n      enemyTilesArr.forEach((tile) => {\n        if (!tile.classList.contains('hit')) {\n          tile.addEventListener('click', (e) => (0,_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e));\n        }\n      });\n    }, 550);\n  }\n}\n\nfunction toggleGameOver(AIwin) {\n  const gameOverModal = document.querySelector('.game-over');\n  const overlay = document.querySelector('.overlay-container');\n\n  const text = AIwin\n    ? 'Defeat! We may have lost the battle but not the war. Regroup and attack!'\n    : 'Victory! Another step towards our mission. We sail on!';\n\n  gameOverModal.childNodes[0].textContent = text;\n\n  overlay.classList.toggle('overlay');\n  gameOverModal.classList.toggle('hidden');\n}\n\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"gameboard1\": () => (/* binding */ gameboard1)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* eslint-disable max-len */\n\n\nconst Gameboard = function () {\n  // Make an array with 100 square objects, with x and 7 coords.\n  function makeGrid() {\n    const gameGrid = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        const square = {\n          coords: [i + 1, j + 1],\n          hit: false,\n          ship: false,\n          row: i + 1,\n          col: j + 1,\n        };\n        gameGrid.push(square);\n      }\n    }\n    return gameGrid;\n  }\n  const gameboardArr = makeGrid();\n\n  function getShipLength(type) {\n    if (type === 'carrier') return 5;\n    if (type === 'battleship') return 4;\n    if (type === 'cruiser' || type === 'submarine') return 3;\n    if (type === 'destroyer') return 2;\n  }\n\n  // Takes a set of coords and marks ship:true on them in gameboardArr.\n  function markCoords(coords, type) {\n    coords.forEach((obj) => {\n      const squareIndex = gameboardArr.findIndex(\n        (el) => JSON.stringify(el.coords) === JSON.stringify(obj)\n      );\n      gameboardArr[squareIndex].ship = type;\n    });\n  }\n\n  const shipsArr = [];\n\n  function placeShip(type, coords) {\n    const deployedShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(type, getShipLength(type), 0, coords);\n\n    shipsArr.push(deployedShip);\n\n    markCoords(coords, type);\n  }\n\n  function receiveAttack(index) {\n    // Mark as hit\n    gameboardArr[index].hit = true;\n    // Check if a ship is there, if so send hit function to ship.\n    if (gameboardArr[index].ship) {\n      const hitShip = shipsArr.find(\n        (ship) => ship.type === gameboardArr[index].ship\n      );\n      hitShip.hit();\n    }\n  }\n\n  function checkGameOver() {\n    const notSunkArr = shipsArr.filter((el) => el.isSunk() === false);\n\n    if (notSunkArr.length > 0) return false;\n    return true;\n  }\n\n  function createDirectionIndexes(shipLength, firstTileIndex) {\n    function checkDirection(move) {\n      // Add all valid moves to an array, if the array is of sufficient length as the ship, then we can process it as valid.\n      const provisionalIndexArr = [firstTileIndex];\n      for (let i = 1; i < shipLength; i++) {\n        const nextTile = gameboardArr[firstTileIndex + move * i];\n        // For up and down moves\n        if (move === -10 || move === +10) {\n          if (nextTile && !nextTile.ship) {\n            provisionalIndexArr.push(firstTileIndex + move * i);\n          }\n        }\n        // For horizontal moves\n        if (move === -1 || move === +1) {\n          if (\n            nextTile &&\n            !nextTile.ship &&\n            nextTile.row === gameboardArr[firstTileIndex].row\n          ) {\n            provisionalIndexArr.push(firstTileIndex + move * i);\n          }\n        }\n        if (provisionalIndexArr.length === shipLength) {\n          return provisionalIndexArr;\n        }\n      }\n    }\n    // Working in gameboardArr, move up - index = - 10. move down = index = + 10. move left - index = - 1. move right - index = +1\n    const moves = [-10, +10, -1, +1];\n    const validMoves = [];\n\n    moves.forEach((mov) => {\n      if (checkDirection(mov)) {\n        validMoves.push(checkDirection(mov));\n      }\n    });\n\n    const randomMove =\n      validMoves[Math.trunc(Math.random() * validMoves.length)];\n\n    return randomMove;\n  }\n\n  function placeRandomShip(shipType, shipLength) {\n    let firstTile = gameboardArr[Math.trunc(Math.random() * 100)];\n    // Keep generating first tile until we find one with no ship.\n    while (firstTile.ship) {\n      firstTile = gameboardArr[Math.trunc(Math.random() * 100)];\n    }\n    const firstTileIndex = gameboardArr.findIndex(\n      (el) => JSON.stringify(el) === JSON.stringify(firstTile)\n    );\n    // From first tile, randomly move in a direction and get other tiles for each ship.\n    const shipTileIndexes = createDirectionIndexes(shipLength, firstTileIndex);\n    // To avoid errors, if no valid indexes are returned, try again!\n    if (!shipTileIndexes) return placeRandomShip(shipType, shipLength);\n\n    const shipCoords = [];\n\n    for (let i = 0; i < shipTileIndexes.length; i++) {\n      shipCoords.push(gameboardArr[shipTileIndexes[i]].coords);\n    }\n\n    placeShip(shipType, shipCoords);\n  }\n\n  function placeAllRandomShips() {\n    placeRandomShip('destroyer', 2);\n    placeRandomShip('submarine', 3);\n    placeRandomShip('cruiser', 3);\n    placeRandomShip('battleship', 4);\n    placeRandomShip('carrier', 5);\n  }\n\n  function clearShipsAndHits() {\n    shipsArr.length = 0;\n    gameboardArr.forEach((tile) => {\n      if (tile.ship) tile.ship = '';\n      tile.hit = false;\n    });\n  }\n\n  return {\n    receiveAttack,\n    gameboardArr,\n    placeShip,\n    markCoords,\n    shipsArr,\n    checkGameOver,\n    placeAllRandomShips,\n    clearShipsAndHits,\n  };\n};\n\nconst gameboard1 = Gameboard();\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable wrap-iife */\n\n\n\n\n\nfunction init() {\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(_player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard, _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard, true);\n\n  // Start btn & new game after end btn\n  const startBtn = document.querySelector('.start-btn');\n  const newGameBtn = document.querySelector('.new-game');\n  startBtn.addEventListener('click', startHandler);\n  newGameBtn.addEventListener('click', () => {\n    startHandler();\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.toggleGameOver)();\n  });\n\n  function startHandler() {\n    _player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard.clearShipsAndHits();\n    _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.clearShipsAndHits();\n\n    _player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard.placeAllRandomShips();\n    _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.placeAllRandomShips();\n\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(_player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard, _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard);\n\n    startBtn.textContent = 'Reset Board';\n  }\n}\n\ninit();\n\nfunction gameLoop(e) {\n  const tileIndex = e.target.dataset.index;\n\n  // Send hit to AI Gameboard\n  _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.receiveAttack(tileIndex);\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(_player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard, _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard, false);\n  if (_player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.checkGameOver()) (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.toggleGameOver)(false);\n  // If a ship is hit, end function.\n  if (_player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.gameboardArr[tileIndex].ship) return;\n\n  // Wait one sec, send random hit to user gameboard\n  (function AIturn() {\n    setTimeout(() => {\n      const smartMoveIndex = _player__WEBPACK_IMPORTED_MODULE_0__.user.makeSmartMove();\n      _player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard.receiveAttack(smartMoveIndex);\n      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(_player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard, _player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard);\n      if (_player__WEBPACK_IMPORTED_MODULE_0__.AI.gameboard.checkGameOver()) (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.toggleGameOver)(true);\n      // If a ship isn't hit, break loop. If not recall this fn.\n      if (!_player__WEBPACK_IMPORTED_MODULE_0__.user.gameboard.gameboardArr[smartMoveIndex].ship) return;\n      AIturn();\n    }, 500);\n  })();\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AI\": () => (/* binding */ AI),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst Player = function () {\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n\n  function makeRandomMove() {\n    // Make array of indexes of unhit tiles\n    const validIndexArr = [];\n    gameboard.gameboardArr.forEach((el, index) => {\n      if (!el.hit) validIndexArr.push(index);\n    });\n    const randomIndex = Math.trunc(Math.random() * validIndexArr.length);\n    const randomTileIndex = validIndexArr[randomIndex];\n\n    return randomTileIndex;\n  }\n\n  function makeSmartMove() {\n    const hitShipsIndexArr = [];\n    const possibleShipsIndexArr = [];\n\n    // Add to array of all moves where a ship was hit\n    gameboard.gameboardArr.forEach((el, ind) => {\n      if (el.hit && el.ship) hitShipsIndexArr.push(ind);\n    });\n\n    if (hitShipsIndexArr.length > 0) {\n      // Add to array of all valid moves adjacent to hit ships\n      hitShipsIndexArr.forEach((el) => {\n        const rightMove = el + 1;\n        const leftMove = el - 1;\n        // Make sure lateral moves on same row\n        const smartRightMove =\n          String(rightMove).length === 1 ||\n          String(rightMove)[0] === String(el)[0]\n            ? rightMove\n            : '';\n        const smartLeftMove =\n          String(leftMove).length === 1 || String(leftMove)[0] === String(el)[0]\n            ? leftMove\n            : '';\n        const upMove = el - 10 >= 0 ? el - 10 : '';\n        const downMove = el + 10 < 100 ? el + 10 : '';\n\n        const possMoves = [smartRightMove, smartLeftMove, upMove, downMove];\n\n        // If they are truthy and not already hit, add them to the possibleShips arr\n        possMoves.forEach((move) => {\n          if (move && !gameboard.gameboardArr[move].hit) {\n            possibleShipsIndexArr.push(move);\n          }\n        });\n      });\n\n      // If there are some possible moves, choose one.\n\n      if (possibleShipsIndexArr.length > 0) {\n        const randomSmartMoveIndex = Math.trunc(\n          Math.random() * possibleShipsIndexArr.length\n        );\n\n        return possibleShipsIndexArr[randomSmartMoveIndex];\n      }\n      return makeRandomMove();\n    }\n    return makeRandomMove();\n  }\n\n  return {\n    makeRandomMove,\n    gameboard,\n    makeSmartMove,\n  };\n};\n\nconst user = Player();\nconst AI = Player();\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n\nfunction Ship(type, shipLength, timesHit, coords) {\n  function isSunk() {\n    return this.timesHit === this.shipLength;\n  }\n  function hit() {\n    this.timesHit += 1;\n  }\n  return {\n    type,\n    shipLength,\n    timesHit,\n    hit,\n    isSunk,\n    coords,\n  };\n}\n// Fix hit function\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/assets/navy.jpg":
/*!*****************************!*\
  !*** ./src/assets/navy.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b75a553814cf5ce1bb1.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/navy.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;