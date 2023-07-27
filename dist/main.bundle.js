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

/***/ "./src/assets/main.scss":
/*!******************************!*\
  !*** ./src/assets/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanks/./src/assets/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classes_UserTank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/UserTank */ \"./src/classes/UserTank.js\");\n/* harmony import */ var _functions_keyDownEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/keyDownEvent */ \"./src/functions/keyDownEvent.js\");\n/* harmony import */ var _functions_startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/startGame */ \"./src/functions/startGame.js\");\n\n\n\n\nfunction App(root) {\n  const game__section = document.querySelector(\".game__section\");\n  const game__start = document.querySelector(\".game__start\");\n  const canvas = document.querySelector(\".canvas\");\n  const context = canvas.getContext(\"2d\");\n  const tank = new _classes_UserTank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"orange\", 25, 15);\n  tank.draw(context);\n  (0,_functions_keyDownEvent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tank, context);\n\n  game__start.addEventListener(\"click\", (event) => {\n    (0,_functions_startGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(canvas, event.currentTarget);\n    root.removeChild(game__section);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://tanks/./src/app.js?");

/***/ }),

/***/ "./src/classes/UserTank.js":
/*!*********************************!*\
  !*** ./src/classes/UserTank.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass UserTank {\n    constructor(color ,w, h) {\n        this.color = color\n        this.x = 120\n        this.y = 135\n        this.w = w\n        this.h = h\n    }\n\n    draw(context) {\n        context.fillStyle = this.color\n        context.fillRect(this.x, this.y, this.w, this.h)\n        this.#drawMachineGun(context)\n    }\n\n    move(context, key) {\n        context.reset()\n\n        if (key === 'ArrowRight') {\n            this.x += 2\n            this.#drawMachineGun(context, key)\n        }\n\n        if (key === 'ArrowLeft') {\n            this.x -= 2\n            console.log(this.x)\n            this.#drawMachineGun(context, key)\n        }\n\n        if (key === 'ArrowUp') {\n            this.y -= 2\n            this.#drawMachineGun(context, key)\n        }\n\n        if (key === 'ArrowDown') {\n            this.y += 2\n            this.#drawMachineGun(context, key)\n        }\n\n        this.draw(context)\n    }\n    #drawMachineGun(context, key) {\n        context.beginPath()\n        if (key === 'ArrowRight') {\n            context.moveTo(this.x + 25, this.y + 7.5)\n            context.lineTo(this.x + 35, this.y + 7.5)\n            context.stroke()\n        }\n        if (key === 'ArrowLeft') {\n            context.moveTo(this.x, this.y + 8.5)\n            context.lineTo(this.x - 10, this.y + 8.5)\n            context.stroke()\n        }\n\n        if (key === 'ArrowUp') {\n            context.moveTo(this.x + 12, this.y)\n            context.lineTo(this.x + 12, this.y - 5)\n            context.stroke()\n        }\n\n        if (key === 'ArrowDown') {\n            context.moveTo(this.x + 12, this.y + 15)\n            context.lineTo(this.x + 12, this.y + 22)\n            context.stroke()\n        }\n        context.closePath()\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTank);\n\n//# sourceURL=webpack://tanks/./src/classes/UserTank.js?");

/***/ }),

/***/ "./src/components/canvas/canvas.js":
/*!*****************************************!*\
  !*** ./src/components/canvas/canvas.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Canvas() {\n  const canvasSection = document.createElement(\"section\");\n  canvasSection.classList.add(\"canvas__section\");\n\n  const canvas = document.createElement(\"canvas\");\n\n  canvas.classList.add(\"canvas\");\n  canvasSection.append(canvas);\n\n  return canvasSection;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n\n//# sourceURL=webpack://tanks/./src/components/canvas/canvas.js?");

/***/ }),

/***/ "./src/components/game/startGame.js":
/*!******************************************!*\
  !*** ./src/components/game/startGame.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction startGame() {\n  const gamestartSection = document.createElement(\"section\");\n  gamestartSection.classList.add(\"game__section\");\n\n  const title = document.createElement(\"h2\");\n  title.innerHTML =\n    \"Welcome to the world of action, adrenaline and incredible adventures! Welcome to BattleCity - where battles are calling you!\";\n  title.classList.add(\"game__title\");\n\n  const startButton = document.createElement(\"button\");\n  startButton.innerHTML = \"Start the Game\";\n  startButton.classList.add(\"game__start\");\n  gamestartSection.append(title, startButton);\n  return gamestartSection;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n\n//# sourceURL=webpack://tanks/./src/components/game/startGame.js?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _headerContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerContainer */ \"./src/components/header/headerContainer.js\");\n\n\nfunction Header() {\n  const headerTag = document.createElement(\"header\");\n  headerTag.classList.add(\"header\");\n\n  headerTag.append((0,_headerContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n  return headerTag;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://tanks/./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/header/headerContainer.js":
/*!**************************************************!*\
  !*** ./src/components/header/headerContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _headerLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerLogo */ \"./src/components/header/headerLogo.js\");\n\n\nfunction headerContainer() {\n  const headerContainer = document.createElement(\"div\");\n  headerContainer.classList.add(\"header__container\");\n  headerContainer.append((0,_headerLogo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  return headerContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerContainer);\n\n\n//# sourceURL=webpack://tanks/./src/components/header/headerContainer.js?");

/***/ }),

/***/ "./src/components/header/headerLogo.js":
/*!*********************************************!*\
  !*** ./src/components/header/headerLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction headerLogo () {\n    const headerLogo = document.createElement('div')\n    const headerLink = document.createElement('span')\n    headerLink.classList.add('header__link')\n    headerLink.innerHTML = 'Tanks'\n\n    headerLogo.append(headerLink)\n    return headerLogo\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerLogo);\n\n//# sourceURL=webpack://tanks/./src/components/header/headerLogo.js?");

/***/ }),

/***/ "./src/functions/keyDownEvent.js":
/*!***************************************!*\
  !*** ./src/functions/keyDownEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction keyDownEvent (tank, context) {\n    document.addEventListener('keydown', (event) => {\n        tank.move(context, event.key)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyDownEvent);\n\n//# sourceURL=webpack://tanks/./src/functions/keyDownEvent.js?");

/***/ }),

/***/ "./src/functions/startGame.js":
/*!************************************!*\
  !*** ./src/functions/startGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction startGame(canvas, start__game) {\n  canvas.classList.toggle(\"canvas__show\");\n\n  if (canvas.classList.contains(\"canvas__show\")) {\n    start__game.innerHTML = \"Finish the Game\";\n    start__game.classList.add(\"game__over\");\n    start__game.classList.remove(\"game__start\");\n  } else if (!canvas.classList.contains(\"canvas__show\")) {\n    start__game.innerHTML = \"Start the Game\";\n    start__game.classList.add(\"game__start\");\n    start__game.classList.remove(\"game__over\");\n  }\n}\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n//# sourceURL=webpack://tanks/./src/functions/startGame.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/main.scss */ \"./src/assets/main.scss\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_game_startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game/startGame */ \"./src/components/game/startGame.js\");\n/* harmony import */ var _components_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/canvas/canvas */ \"./src/components/canvas/canvas.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.querySelector(\".root\");\n\n  root.append((0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_components_game_startGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_components_canvas_canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  (0,_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(root);\n});\n\n\n//# sourceURL=webpack://tanks/./src/index.js?");

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