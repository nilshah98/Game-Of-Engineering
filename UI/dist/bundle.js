/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n // Globals\n\nvar cn = 0; // Graph builder strings\n\nvar pathLeft = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--left\\\">\\n                    <div class=\\\"graph__path graph__path--left\\\"></div>\\n                </div>\";\nvar pathRight = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--right\\\">\\n                    <div class=\\\"graph__path graph__path--right\\\"></div>\\n                </div>\";\nvar nodeLeft = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--left\\\">\\n                    <div class=\\\"graph__node graph__node--left\\\"></div>\\n                </div>\";\nvar nodeRight = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--right\\\">\\n                    <div class=\\\"graph__node graph__node--right\\\"></div>\\n                </div>\";\nvar pathTop = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--top\\\">\\n                    <div class=\\\"graph__path graph__path--top\\\"></div>\\n                </div> \";\nvar card = \"<div class=\\\"card__body\\\">Template</div>\"; // Helper functions\n\nvar handleStyleProperties = function handleStyleProperties(components, property, value) {\n  return components.forEach(function (element) {\n    return element.style[property] = value;\n  });\n};\n\nvar generateCard = function generateCard(text) {\n  return \"<div class=\\\"card__body\\\">\".concat(text, \"</div>\");\n}; // Selectors\n\n\nvar graphPathsWrapper = document.getElementsByClassName(\"graph__pathWrapper\");\nvar graphPaths = document.getElementsByClassName(\"graph__path\");\nvar graphNodesWrapper = document.getElementsByClassName(\"graph__nodeWrapper\");\nvar graphNodes = document.getElementsByClassName(\"graph__node\");\nvar buttonNavigateLeft = document.getElementsByClassName(\"buttonNavigate__button--left\")[0];\nvar buttonNavigateRight = document.getElementsByClassName(\"buttonNavigate__button--right\")[0];\nvar cardContainers = document.getElementsByClassName(\"card__container\")[0];\nvar cards = document.getElementsByClassName(\"card__body\");\nvar graphRow = document.getElementsByClassName(\"graph__row\");\nvar graphCol = document.getElementsByClassName(\"graph__col\"); // Graph Build\n\nvar currPath = \"\";\n\nfor (var i = 0; i < 5; i++) {\n  currPath += nodeLeft;\n  currPath += pathLeft;\n}\n\ncurrPath += nodeLeft;\ngraphRow[0].innerHTML = currPath;\ngraphRow[2].innerHTML = currPath;\ncurrPath = \"\";\n\nfor (var _i = 0; _i < 5; _i++) {\n  currPath += nodeRight;\n  currPath += pathRight;\n}\n\ncurrPath += nodeRight;\ngraphRow[1].innerHTML = currPath;\ngraphRow[3].innerHTML = currPath;\ncurrPath = \"\";\n\nfor (var _i2 = 0; _i2 < 1; _i2++) {\n  currPath += pathTop;\n}\n\nfor (var _i3 = 0; _i3 < graphCol.length; _i3++) {\n  graphCol[_i3].innerHTML = currPath;\n}\n\nvar currCard = \"\";\n\nfor (var _i4 = 0; _i4 < 24; _i4++) {\n  currCard += generateCard(\"\".concat(_i4, \"th + Card\"));\n}\n\ncardContainers.innerHTML = currCard; // Event-Listeners\n// Node click disabled \n// for(let i = 0; i < graphNodesWrapper.length; i++){\n//     graphNodesWrapper[i].addEventListener(\"click\", () => {\n//         console.log(`${i} Node clicked`)\n//         cardContainers.classList.toggle(\"card__container--active\");\n//         cards[i].classList.toggle(\"card__body--active\")\n//     })\n// }\n\ncardContainers.addEventListener(\"click\", function () {\n  cardContainers.classList.toggle(\"card__container--active\");\n\n  for (var _i5 = 0; _i5 < cards.length; _i5++) {\n    if (cards[_i5].classList.contains(\"card__body--active\")) {\n      cards[_i5].classList.toggle(\"card__body--active\");\n    }\n  }\n});\nbuttonNavigateLeft.addEventListener(\"click\", function () {\n  cn = Math.max(cn - 1, 0);\n\n  if (graphPaths[cn].classList.contains(\"graph__path--active\")) {\n    handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], \"pointerEvents\", \"none\");\n    graphPaths[cn].classList.toggle(\"graph__path--active\");\n    setTimeout(function () {\n      handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], \"pointerEvents\", \"auto\");\n      graphNodes[cn].classList.toggle(\"graph__node--active\");\n      graphNodesWrapper[cn].classList.toggle(\"graph__nodeWrapper--active\");\n    }, 501);\n  }\n});\nbuttonNavigateRight.addEventListener(\"click\", function () {\n  cn = Math.min(cn + 1, graphPathsWrapper.length);\n\n  if (!graphPaths[cn - 1].classList.contains(\"graph__path--active\")) {\n    handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], \"pointerEvents\", \"none\");\n    graphNodes[cn - 1].classList.toggle(\"graph__node--active\");\n    graphNodesWrapper[cn - 1].classList.toggle(\"graph__nodeWrapper--active\");\n    setTimeout(function () {\n      handleStyleProperties([buttonNavigateLeft, buttonNavigateRight], \"pointerEvents\", \"auto\");\n      graphPaths[cn - 1].classList.toggle(\"graph__path--active\");\n      setTimeout(function () {\n        cardContainers.classList.toggle(\"card__container--active\");\n        cards[cn].classList.toggle(\"card__body--active\");\n      }, 501);\n    }, 501);\n  }\n});\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });