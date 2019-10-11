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

/***/ "./src/javascript/constants.js":
/*!*************************************!*\
  !*** ./src/javascript/constants.js ***!
  \*************************************/
/*! exports provided: pathLeft, pathRight, nodeLeft, nodeRight, pathTop, initialise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathLeft\", function() { return pathLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathRight\", function() { return pathRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nodeLeft\", function() { return nodeLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nodeRight\", function() { return nodeRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathTop\", function() { return pathTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialise\", function() { return initialise; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/javascript/selectors.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/javascript/helper.js\");\n\n // Graph builder strings\n\nvar pathLeft = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--left\\\">\\n<div class=\\\"graph__path graph__path--left\\\"></div>\\n</div>\";\nvar pathRight = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--right\\\">\\n<div class=\\\"graph__path graph__path--right\\\"></div>\\n</div>\";\nvar nodeLeft = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--left\\\">\\n<div class=\\\"graph__node graph__node--left\\\"></div>\\n</div>\";\nvar nodeRight = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--right\\\">\\n<div class=\\\"graph__node graph__node--right\\\"></div>\\n</div>\";\nvar pathTop = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--top\\\">\\n<div class=\\\"graph__path graph__path--top\\\"></div>\\n</div> \"; // Helper functions\n\nvar generateGraph = function generateGraph() {\n  var currPath = \"\";\n\n  for (var i = 0; i < 5; i++) {\n    currPath += nodeLeft;\n    currPath += pathLeft;\n  }\n\n  currPath += nodeLeft;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphRow\"][0].innerHTML = currPath;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphRow\"][2].innerHTML = currPath;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphRow\"][4].innerHTML = currPath;\n  currPath = \"\";\n\n  for (var _i = 0; _i < 5; _i++) {\n    currPath += nodeRight;\n    currPath += pathRight;\n  }\n\n  currPath += nodeRight;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphRow\"][1].innerHTML = currPath;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphRow\"][3].innerHTML = currPath;\n  currPath = \"\";\n\n  for (var _i2 = 0; _i2 < 1; _i2++) {\n    currPath += pathTop;\n  }\n\n  for (var _i3 = 0; _i3 < _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphCol\"].length; _i3++) {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphCol\"][_i3].innerHTML = currPath;\n  }\n\n  var _getStore = getStore(),\n      cn = _getStore.cn;\n\n  for (var _i4 = 0; _i4 < cn; _i4++) {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][_i4].classList.add(\"graph__nodeWrapper--active\");\n\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPathsWrapper\"][_i4].classList.add(\"graph__pathWrapper--active\");\n\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPaths\"][_i4].classList.add(\"graph__path--active\");\n\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodes\"][_i4].classList.add(\"graph__node--active\");\n  }\n};\n\ngenerateGraph();\n\nvar initialise = function initialise() {\n  var currCard = \"\";\n\n  var _getStore2 = getStore(),\n      params = _getStore2.params,\n      qid = _getStore2.qid,\n      cn = _getStore2.cn,\n      isCouncil = _getStore2.isCouncil;\n\n  var nextCard = next_card(qid, params, isCouncil); // keep fetching till nextCard has title\n\n  while (!nextCard.hasOwnProperty(\"title\")) {\n    if (nextCard.isVacation) {\n      params[\"time\"] = 100;\n      Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"handleMessages\"])(\"info\", \"Vacation started! Here're your skills till now\\n - \".concat(Object.keys(params).map(function (elem) {\n        return elem + \" - \" + params[elem];\n      })));\n    }\n\n    nextCard = next_card(qid, params, isCouncil);\n    qid = nextCard.id;\n  }\n\n  updateStore(params, qid, cn, isCouncil);\n  currCard += Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"generateCard\"])(nextCard);\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardContainers\"].innerHTML = currCard;\n  var answers = document.getElementsByClassName(\"card__answer\");\n\n  var _loop = function _loop(i) {\n    answers[i].addEventListener(\"mouseover\", function () {\n      return Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"handleDots\"])(i, 0, nextCard);\n    });\n    answers[i].addEventListener(\"mouseout\", function () {\n      return Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"handleDots\"])(i, 0, nextCard);\n    });\n  };\n\n  for (var i = 0; i < answers.length; i++) {\n    _loop(i);\n  }\n\n  Object(_helper__WEBPACK_IMPORTED_MODULE_1__[\"handleRes\"])(params);\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][cn].classList.toggle(\"graph__nodeWrapper--next\");\n  return nextCard;\n};\n\n\n\n//# sourceURL=webpack:///./src/javascript/constants.js?");

/***/ }),

/***/ "./src/javascript/eventListeners.js":
/*!******************************************!*\
  !*** ./src/javascript/eventListeners.js ***!
  \******************************************/
/*! exports provided: initialiseEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialiseEventListeners\", function() { return initialiseEventListeners; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/javascript/selectors.js\");\n // Event Listeners\n\nvar initialiseEventListeners = function initialiseEventListeners(offSet) {\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageWrapper\"].addEventListener(\"click\", function () {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageWrapper\"].classList.toggle(\"message__wrapper--active\");\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageBody\"].classList.remove(\"message__body--danger\");\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageBody\"].classList.remove(\"message__body--warning\");\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageBody\"].classList.remove(\"message__body--info\");\n  });\n\n  for (var i = 0; i < _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"].length; i++) {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][i].addEventListener(\"click\", function () {\n      var _getStore = getStore(),\n          cn = _getStore.cn;\n\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPageWrapper\"].classList.toggle(\"graphPage__wrapper--active\");\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardContainers\"].classList.toggle(\"card__container--active\");\n      setTimeout(function () {\n        // Using offset to counter localstorage loading\n        _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardBodies\"][cn - offSet].classList.toggle(\"card__body--active\");\n      }, 301);\n    });\n  }\n\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardContainers\"].addEventListener(\"click\", function () {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPageWrapper\"].classList.toggle(\"graphPage__wrapper--active\");\n\n    for (var _i = 0; _i < _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardBodies\"].length; _i++) {\n      if (_selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardBodies\"][_i].classList.contains(\"card__body--active\")) {\n        _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardBodies\"][_i].classList.toggle(\"card__body--active\");\n      }\n    }\n\n    setTimeout(function () {\n      return _selectors__WEBPACK_IMPORTED_MODULE_0__[\"cardContainers\"].classList.toggle(\"card__container--active\");\n    }, 301);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/javascript/eventListeners.js?");

/***/ }),

/***/ "./src/javascript/helper.js":
/*!**********************************!*\
  !*** ./src/javascript/helper.js ***!
  \**********************************/
/*! exports provided: generateCard, handleRes, handleMessages, handleDots, graphAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCard\", function() { return generateCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRes\", function() { return handleRes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleMessages\", function() { return handleMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDots\", function() { return handleDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphAnimation\", function() { return graphAnimation; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/javascript/selectors.js\");\n // Helper Functions\n\nvar generateCard = function generateCard(data) {\n  return \"<div class=\\\"card__body\\\">\\n    <div class=\\\"card__title\\\">\\n    \".concat(data.title, \"\\n    </div>\\n    <div class=\\\"card__question\\\">\\n    \").concat(data.question, \"\\n    </div>\\n    <div class=\\\"card__options\\\"> \\n    \").concat(data.options.map(function (item, index) {\n    return \"<div class=\\\"card__answer card__answer--\".concat(index, \"\\\"> \").concat(item.text, \" </div>\");\n  }).join(' '), \"\\n    </div>\\n    </div>\");\n};\n\nvar handleRes = function handleRes(params) {\n  var percent = 100 - (params[\"technical\"] + params[\"management\"] + params[\"sports\"] + params[\"cultural\"]) / 4;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramsRes\"][0].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"time\"];\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramsRes\"][1].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"social\"];\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramsRes\"][2].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"pointer\"];\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramsRes\"][3].style.transform = \"translateY(\".concat(percent, \"%)\");\n};\n\nvar handleMessages = function handleMessages(event, message) {\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageBody\"].textContent = message;\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageWrapper\"].classList.toggle(\"message__wrapper--active\");\n  _selectors__WEBPACK_IMPORTED_MODULE_0__[\"messageBody\"].classList.add(\"message__body--\".concat(event));\n};\n\nvar handleDots = function handleDots(curr, start, snextCard) {\n  for (var k in snextCard.options[curr - start].effect) {\n    if (k === \"time\") {\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramDots\"][1].classList.toggle(\"params__dot--active\");\n    } else if (k === \"social\") {\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramDots\"][2].classList.toggle(\"params__dot--active\");\n    } else if (k === \"pointer\") {\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramDots\"][3].classList.toggle(\"params__dot--active\");\n    } else {\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"paramDots\"][0].classList.toggle(\"params__dot--active\");\n    }\n  }\n};\n\nvar graphAnimation = function graphAnimation() {\n  var _getStore = getStore(),\n      params = _getStore.params,\n      qid = _getStore.qid,\n      cn = _getStore.cn,\n      isCouncil = _getStore.isCouncil;\n\n  cn = Math.min(cn + 1, _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPathsWrapper\"].length);\n  updateStore(params, qid, cn, isCouncil);\n\n  if (!_selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPaths\"][cn - 1].classList.contains(\"graph__path--active\")) {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][cn - 1].classList.toggle(\"graph__nodeWrapper--next\");\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodes\"][cn - 1].classList.toggle(\"graph__node--active\");\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][cn - 1].classList.toggle(\"graph__nodeWrapper--active\");\n    setTimeout(function () {\n      _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphPaths\"][cn - 1].classList.toggle(\"graph__path--active\");\n\n      if (_selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodes\"].length > cn) {\n        _selectors__WEBPACK_IMPORTED_MODULE_0__[\"graphNodesWrapper\"][cn].classList.toggle(\"graph__nodeWrapper--next\");\n      }\n    }, 501);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/javascript/helper.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/javascript/constants.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ \"./src/javascript/selectors.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/javascript/helper.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners */ \"./src/javascript/eventListeners.js\");\n\n\n\n\n // Globals\n\nvar nextCard = Object(_constants__WEBPACK_IMPORTED_MODULE_1__[\"initialise\"])();\n\nvar _getStore = getStore(),\n    cn = _getStore.cn;\n\nObject(_eventListeners__WEBPACK_IMPORTED_MODULE_4__[\"initialiseEventListeners\"])(cn);\n\nvar getNextCard = function getNextCard(optionId) {\n  // Get result for the current question number and option\n  var _getStore2 = getStore(),\n      params = _getStore2.params,\n      qid = _getStore2.qid,\n      cn = _getStore2.cn,\n      isCouncil = _getStore2.isCouncil;\n\n  var event = \"\";\n  var eventAttr = [];\n  var result = nextCard.options[optionId].effect;\n  qid = nextCard.id;\n  isCouncil = settleEffect(result, params, isCouncil);\n\n  for (var k in params) {\n    if (params[k] < 0) {\n      event = \"danger\";\n      eventAttr = [k];\n      break;\n    } else if (params[k] < 20) {\n      event = \"warning\";\n      eventAttr.push(k);\n    }\n  }\n\n  Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleRes\"])(params);\n\n  if (event === \"danger\") {\n    Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleMessages\"])(event, \"Game Over \".concat(eventAttr.join(' '), \" has dropped below 0\"));\n    nextCard = null;\n    updateStore(params, qid, cn, isCouncil);\n    return;\n  } else {\n    // Get nextcard for the provided qid, params and isCouncil\n    nextCard = next_card(qid, params, isCouncil);\n    var flag = true; // While the nextCard does not have \"title\" parameter, keep fetching\n\n    while (!nextCard.hasOwnProperty(\"title\")) {\n      if (nextCard.isVacation) {\n        params[\"time\"] = 100;\n        event = event === \"warning\" ? event : \"info\";\n        Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleMessages\"])(event, \"Vacation started! Here're your skills till now\\n - \".concat(Object.keys(params).map(function (elem) {\n          return elem + \" - \" + params[elem];\n        })));\n        flag = false;\n      }\n\n      nextCard = next_card(qid, params, isCouncil);\n      qid = nextCard.id;\n    }\n\n    if (flag && event === \"warning\") {\n      Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleMessages\"])(event, \"Warning \".concat(eventAttr.join(), \" have dropped below 20\"));\n    }\n\n    updateStore(params, qid, cn, isCouncil);\n    return nextCard;\n  }\n};\n\nvar answersEventListener = function answersEventListener() {\n  var answers = document.getElementsByClassName(\"card__answer\");\n\n  var _loop = function _loop(i) {\n    answers[i].addEventListener(\"click\", function () {\n      // answers[i].classList[1].slice(14) => optionID for card__answer-- => len is 14\n      var snextCard = getNextCard(answers[i].classList[1].slice(14));\n\n      if (snextCard) {\n        (function () {\n          _selectors__WEBPACK_IMPORTED_MODULE_2__[\"cardContainers\"].innerHTML += Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"generateCard\"])(snextCard);\n          var start = answers.length - snextCard.options.length;\n          var end = answers.length;\n\n          var _loop2 = function _loop2(j) {\n            answers[j].addEventListener(\"mouseover\", function () {\n              return Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleDots\"])(j, start, snextCard);\n            });\n            answers[j].addEventListener(\"mouseout\", function () {\n              return Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"handleDots\"])(j, start, snextCard);\n            });\n          };\n\n          for (var j = start; j < end; j++) {\n            _loop2(j);\n          }\n\n          answersEventListener();\n          Object(_helper__WEBPACK_IMPORTED_MODULE_3__[\"graphAnimation\"])();\n        })();\n      } else {\n        localStorage.clear();\n        setTimeout(function () {\n          return location.reload();\n        }, 2000);\n      }\n    });\n  };\n\n  for (var i = 0; i < answers.length; i++) {\n    _loop(i);\n  }\n};\n\nanswersEventListener();\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/selectors.js":
/*!*************************************!*\
  !*** ./src/javascript/selectors.js ***!
  \*************************************/
/*! exports provided: graphPathsWrapper, graphPaths, graphNodesWrapper, graphNodes, cardContainers, cardBodies, graphRow, graphCol, graphPageWrapper, paramsRes, paramDots, messageWrapper, messageBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphPathsWrapper\", function() { return graphPathsWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphPaths\", function() { return graphPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphNodesWrapper\", function() { return graphNodesWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphNodes\", function() { return graphNodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardContainers\", function() { return cardContainers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardBodies\", function() { return cardBodies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphRow\", function() { return graphRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphCol\", function() { return graphCol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphPageWrapper\", function() { return graphPageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paramsRes\", function() { return paramsRes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paramDots\", function() { return paramDots; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageWrapper\", function() { return messageWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageBody\", function() { return messageBody; });\n// Selectors\nvar graphPathsWrapper = document.getElementsByClassName(\"graph__pathWrapper\");\nvar graphPaths = document.getElementsByClassName(\"graph__path\");\nvar graphNodesWrapper = document.getElementsByClassName(\"graph__nodeWrapper\");\nvar graphNodes = document.getElementsByClassName(\"graph__node\");\nvar cardContainers = document.getElementsByClassName(\"card__container\")[0];\nvar cardBodies = document.getElementsByClassName(\"card__body\");\nvar graphRow = document.getElementsByClassName(\"graph__row\");\nvar graphCol = document.getElementsByClassName(\"graph__col\");\nvar graphPageWrapper = document.getElementsByClassName(\"graphPage__wrapper\")[0];\nvar paramsRes = document.getElementsByClassName(\"params__fill\");\nvar paramDots = document.getElementsByClassName(\"params__dot\");\nvar messageWrapper = document.getElementsByClassName(\"message__wrapper\")[0];\nvar messageBody = document.getElementsByClassName(\"message__body\")[0];\n\n\n//# sourceURL=webpack:///./src/javascript/selectors.js?");

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