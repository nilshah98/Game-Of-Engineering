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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n // Globals\n\nvar _getStore = getStore(),\n    cn = _getStore.cn,\n    qid = _getStore.qid,\n    n_qid = _getStore.n_qid,\n    params = _getStore.params;\n\nvar isCouncil = false;\nconsole.log(cn, qid, n_qid, params);\nvar nextCard = {}; // Since cards are fetched from 0, whereas nodes from cn\n// Hence creates an offset, which will be constant\n\nvar offSet = cn; // Graph builder strings\n\nvar pathLeft = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--left\\\">\\n<div class=\\\"graph__path graph__path--left\\\"></div>\\n</div>\";\nvar pathRight = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--right\\\">\\n<div class=\\\"graph__path graph__path--right\\\"></div>\\n</div>\";\nvar nodeLeft = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--left\\\">\\n<div class=\\\"graph__node graph__node--left\\\"></div>\\n</div>\";\nvar nodeRight = \"<div class=\\\"graph__nodeWrapper graph__nodeWrapper--right\\\">\\n<div class=\\\"graph__node graph__node--right\\\"></div>\\n</div>\";\nvar pathTop = \"<div class=\\\"graph__pathWrapper graph__pathWrapper--top\\\">\\n<div class=\\\"graph__path graph__path--top\\\"></div>\\n</div> \"; // Helper functions\n\nvar generateCard = function generateCard(data) {\n  return \"<div class=\\\"card__body\\\">\\n    <div class=\\\"card__question\\\">\\n    \".concat(data.question, \"\\n    </div>\\n    <div class=\\\"card__options\\\"> \\n    \").concat(data.options.map(function (item, index) {\n    return \"<div class=\\\"card__answer card__answer--\".concat(index, \"\\\"> \").concat(item.text, \" </div>\");\n  }).join(' '), \"\\n    </div>\\n    </div>\");\n};\n\nvar generateTooltip = function generateTooltip(data, location) {\n  return \"<div class=\\\"toolTip__container\\\"><div class=\\\"toolTip__body--\".concat(location, \">\\n\").concat(data, \"\\n</div></div>\");\n};\n\nvar messageWrapper = document.getElementsByClassName(\"message__wrapper\")[0];\nvar messageBody = document.getElementsByClassName(\"message__body\")[0];\nmessageWrapper.addEventListener(\"click\", function () {\n  return messageWrapper.classList.toggle(\"message__wrapper--active\");\n});\n\nvar getNextCard = function getNextCard(optionId) {\n  // Get result for the current question number and option\n  // qid and optionId\n  // cardBodies = DOMCards\n  // cards = question-cards\n  console.log(cards[qid]);\n  var result = nextCard.options[optionId].effect;\n  isCouncil = settleEffect(result, params, isCouncil);\n  messageBody.classList.remove(\"message__body--danger\");\n  messageBody.classList.remove(\"message__body--warning\");\n  messageBody.classList.remove(\"message__body--success\");\n\n  for (var k in params) {\n    if (params[k] < 0) {\n      console.log(\"GAMEOVER\", k);\n      messageBody.textContent = \"GAME OVER! Your \".concat(k, \" has gone below 0\");\n      messageWrapper.classList.toggle(\"message__wrapper--active\");\n      messageBody.classList.add(\"message__body--danger\"); // window.localStorage.clear();\n      // params = {social : 50,technical : 50,goal : undefined,management : 50,cultural : 50,sports : 50,time : 100,pointer : 0};\n      // updateStore(params,0,0)\n\n      localStorage.clear();\n      var newRes = getStore();\n      cn = newRes.cn;\n      qid = newRes.qid;\n      params = newRes.params;\n      setTimeout(function () {\n        return location.reload();\n      }, 1500);\n      break;\n    } else if (params[k] < 20) {\n      messageBody.textContent = \"WARNING! Your \".concat(k, \" has gone below 20\");\n      messageWrapper.classList.toggle(\"message__wrapper--active\");\n      messageBody.classList.add(\"message__body--warning\");\n    }\n  } // Resume animations\n  // tech | time | social | pointer\n\n\n  var percent = 100 - (params[\"technical\"] + params[\"management\"] + params[\"sports\"] + params[\"cultural\"]) / 4;\n  paramsRes[0].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"time\"];\n  paramsRes[1].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"social\"];\n  paramsRes[2].style.transform = \"translateY(\".concat(percent, \"%)\");\n  percent = 100 - params[\"pointer\"];\n  paramsRes[3].style.transform = \"translateY(\".concat(percent, \"%)\"); // Get nextcard for the provided qid, params and isCouncil\n\n  qid = n_qid;\n  nextCard = next_card(qid, params, isCouncil);\n  n_qid = nextCard.id; // While the nextCard does not have \"title\" parameter, keep fetching\n\n  while (!nextCard.hasOwnProperty(\"title\")) {\n    if (nextCard.isVacation) {\n      params[\"time\"] = 100;\n    }\n\n    qid = n_qid;\n    nextCard = next_card(qid, params, isCouncil);\n    n_qid = nextCard.id;\n  } // Get the id for next card, since numbered ad 1,2,3,4....\n  // console.log(nextCard);\n  // updateStore(params,qid,n_qid,cn);\n  // Return the card generated for the next question\n\n\n  return nextCard;\n}; // Selectors\n\n\nvar graphPathsWrapper = document.getElementsByClassName(\"graph__pathWrapper\");\nvar graphPaths = document.getElementsByClassName(\"graph__path\");\nvar graphNodesWrapper = document.getElementsByClassName(\"graph__nodeWrapper\");\nvar graphNodes = document.getElementsByClassName(\"graph__node\");\nvar cardContainers = document.getElementsByClassName(\"card__container\")[0];\nvar cardBodies = document.getElementsByClassName(\"card__body\");\nvar graphRow = document.getElementsByClassName(\"graph__row\");\nvar graphCol = document.getElementsByClassName(\"graph__col\");\nvar graphPageWrapper = document.getElementsByClassName(\"graphPage__wrapper\")[0]; // tech | time | social | pointer\n\nvar paramsRes = document.getElementsByClassName(\"params__fill\");\nvar paramDots = document.getElementsByClassName(\"params__dot\"); // Graph Build\n\nvar currPath = \"\";\n\nfor (var i = 0; i < 5; i++) {\n  currPath += nodeLeft;\n  currPath += pathLeft;\n}\n\ncurrPath += nodeLeft;\ngraphRow[0].innerHTML = currPath;\ngraphRow[2].innerHTML = currPath;\ngraphRow[4].innerHTML = currPath;\ncurrPath = \"\";\n\nfor (var _i = 0; _i < 5; _i++) {\n  currPath += nodeRight;\n  currPath += pathRight;\n}\n\ncurrPath += nodeRight;\ngraphRow[1].innerHTML = currPath;\ngraphRow[3].innerHTML = currPath;\ncurrPath = \"\";\n\nfor (var _i2 = 0; _i2 < 1; _i2++) {\n  currPath += pathTop;\n}\n\nfor (var _i3 = 0; _i3 < graphCol.length; _i3++) {\n  graphCol[_i3].innerHTML = currPath;\n} // Inializers\n// Path => cn\n\n\nfor (var _i4 = 0; _i4 < cn; _i4++) {\n  graphNodesWrapper[_i4].classList.add(\"graph__nodeWrapper--active\");\n\n  graphPathsWrapper[_i4].classList.add(\"graph__pathWrapper--active\");\n\n  graphPaths[_i4].classList.add(\"graph__path--active\");\n\n  graphNodes[_i4].classList.add(\"graph__node--active\");\n} // Question => qid\n\n\nvar currCard = \"\";\nnextCard = next_card(qid, params, false);\nconsole.log(\"***********************************\", nextCard);\nconsole.log(qid);\nn_qid = nextCard.id; // keep fetching till nextCard has title\n\nwhile (!nextCard.hasOwnProperty(\"title\")) {\n  console.log(\"loop\");\n\n  if (nextCard.isVacation) {\n    params[\"time\"] = 100;\n  }\n\n  qid = n_qid;\n  nextCard = next_card(qid, params, isCouncil);\n  n_qid = nextCard.id;\n} // Cannot update here, since no necessary that the question has been answered;\n// qid = nextCard.id;\n\n\ncurrCard += generateCard(nextCard);\ncardContainers.innerHTML = currCard; // Result\n\nvar percent = 100 - params[\"technical\"];\nparamsRes[0].style.transform = \"translateY(\".concat(percent, \"%)\");\npercent = 100 - params[\"time\"];\nparamsRes[1].style.transform = \"translateY(\".concat(percent, \"%)\");\npercent = 100 - params[\"social\"];\nparamsRes[2].style.transform = \"translateY(\".concat(percent, \"%)\");\npercent = 100 - params[\"pointer\"];\nparamsRes[3].style.transform = \"translateY(\".concat(percent, \"%)\"); // Event-Listeners\n\nfor (var _i5 = 0; _i5 < graphNodesWrapper.length; _i5++) {\n  graphNodesWrapper[_i5].addEventListener(\"click\", function () {\n    graphPageWrapper.classList.toggle(\"graphPage__wrapper--active\");\n    cardContainers.classList.toggle(\"card__container--active\");\n    setTimeout(function () {\n      // cn - offset since ossible that on 5th node, but first card\n      // since earlier cards not rendered\n      cardBodies[cn - offSet].classList.toggle(\"card__body--active\");\n    }, 301);\n  });\n}\n\ncardContainers.addEventListener(\"click\", function () {\n  graphPageWrapper.classList.toggle(\"graphPage__wrapper--active\");\n\n  for (var _i6 = 0; _i6 < cardBodies.length; _i6++) {\n    if (cardBodies[_i6].classList.contains(\"card__body--active\")) {\n      cardBodies[_i6].classList.toggle(\"card__body--active\");\n    }\n  }\n\n  setTimeout(function () {\n    return cardContainers.classList.toggle(\"card__container--active\");\n  }, 301);\n});\ngraphNodesWrapper[cn].classList.toggle(\"graph__nodeWrapper--next\");\n\nvar answersEventListener = function answersEventListener() {\n  var answers = document.getElementsByClassName(\"card__answer\");\n\n  var _loop = function _loop(_i7) {\n    answers[_i7].addEventListener(\"click\", function () {\n      var id = [answers[_i7].classList[1].slice(14), qid]; // console.log(id, \"OPTION CLICKED\");\n\n      var snextCard = getNextCard(id[0], id[1]);\n      cardContainers.innerHTML += generateCard(snextCard);\n\n      var _loop2 = function _loop2(j) {\n        answers[j].addEventListener(\"mouseover\", function () {\n          for (var _i8 = 0; _i8 < paramDots.length; _i8++) {// paramDots[i].classList.remove(\"params__dot--positive\")\n            // paramDots[i].classList.remove(\"params__dot--negative\")   \n          }\n\n          console.log(\"HOVER\", snextCard.options);\n\n          for (var k in snextCard.options[j - answers.length + snextCard.options.length].effect) {\n            console.log(k, j - answers.length + snextCard.options.length);\n\n            if (k === \"time\") {\n              paramDots[1].classList.toggle(\"params__dot--active\");\n            } else if (k === \"social\") {\n              paramDots[2].classList.toggle(\"params__dot--active\");\n            } else if (k === \"pointer\") {\n              paramDots[3].classList.toggle(\"params__dot--active\");\n            } else {\n              paramDots[0].classList.toggle(\"params__dot--active\");\n            }\n          }\n        });\n        answers[j].addEventListener(\"mouseout\", function () {\n          for (var _i9 = 0; _i9 < paramDots.length; _i9++) {// paramDots[i].classList.remove(\"params__dot--positive\")\n            // paramDots[i].classList.remove(\"params__dot--negative\")   \n          }\n\n          for (var k in snextCard.options[j - answers.length + snextCard.options.length].effect) {\n            if (k === \"time\") {\n              paramDots[1].classList.toggle(\"params__dot--active\");\n            } else if (k === \"social\") {\n              paramDots[2].classList.toggle(\"params__dot--active\");\n            } else if (k === \"pointer\") {\n              paramDots[3].classList.toggle(\"params__dot--active\");\n            } else {\n              paramDots[0].classList.toggle(\"params__dot--active\");\n            }\n          }\n        });\n      };\n\n      for (var j = answers.length - snextCard.options.length; j < answers.length; j++) {\n        _loop2(j);\n      }\n\n      answersEventListener();\n      cn = Math.min(cn + 1, graphPathsWrapper.length);\n\n      if (!graphPaths[cn - 1].classList.contains(\"graph__path--active\")) {\n        updateStore(params, qid, cn);\n        graphNodesWrapper[cn - 1].classList.toggle(\"graph__nodeWrapper--next\");\n        graphNodes[cn - 1].classList.toggle(\"graph__node--active\");\n        graphNodesWrapper[cn - 1].classList.toggle(\"graph__nodeWrapper--active\");\n        setTimeout(function () {\n          graphPaths[cn - 1].classList.toggle(\"graph__path--active\");\n\n          if (graphNodes.length > cn) {\n            graphNodesWrapper[cn].classList.toggle(\"graph__nodeWrapper--next\");\n          }\n        }, 501);\n      }\n    });\n  };\n\n  for (var _i7 = 0; _i7 < answers.length; _i7++) {\n    _loop(_i7);\n  }\n};\n\nanswersEventListener();\nconsole.log(\"LAST\");\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

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