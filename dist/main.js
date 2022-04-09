/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "loadScores": () => (/* binding */ loadScores)
/* harmony export */ });
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const leaderBoard = document.getElementById('leaderboard');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zqq0RWTogfgNa3CT4inU/scores/';

const createDiv = (scores) => {
  leaderBoard.innerHTML = '';
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  sortedScores.forEach((score) => {
    const scoreContainer = `
      <li class="score-text">${score.user}: ${score.score}</li>
    `;
    leaderBoard.innerHTML += scoreContainer;
  });
};

// Scores
const getScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  return scores.result;
};

const addScore = async () => {
  const response = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: inputName.value,
      score: inputScore.value,
    }),
  });

  const status = await response.json();
  return status;
};

const loadScores = () => {
  getScores().then((scores) => {
    createDiv(scores);
  });
};



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --hue: 233;\r\n  --bg: hsl(var(--hue), 100%, 100%);\r\n  --fg: hsl(var(--hue), 100%, 20%);\r\n  --primary: hsl(var(--hue), 90%, 55%);\r\n  --primaryT: hsla(var(--hue), 90%, 55%, 0);\r\n  --transDur: 0.3s;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 5%;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  color: var(--fg);\r\n  height: 100vh;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\ninput {\r\n  margin-top: 1em;\r\n  border: solid hsl(var(--hue), 100%, 20%);\r\n  width: 19vw;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding-left: 1em;\r\n}\r\n\r\nli:nth-child(even) {\r\n  background-color: gray;\r\n}\r\n\r\nbutton {\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  border: solid 2px;\r\n  padding: 0.1em 0.5em;\r\n  box-shadow: 3px 3px;\r\n  margin: auto;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n}\r\n\r\n.container-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40vw;\r\n  padding: 0 5vw;\r\n}\r\n\r\n.jc-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.leaderboard {\r\n  margin-top: 1em;\r\n  border: solid;\r\n  width: 27vw;\r\n}\r\n\r\n#submit {\r\n  margin-top: 1em;\r\n}\r\n\r\n/* dark mode button style */\r\n* {\r\n  border: 0;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background-color: var(--bg);\r\n}\r\n\r\n/* Default */\r\n.theme {\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.theme__fill,\r\n.theme__icon {\r\n  transition: transform var(--transDur) ease-in-out;\r\n}\r\n\r\n.theme__fill {\r\n  background-color: var(--bg);\r\n  display: block;\r\n  mix-blend-mode: difference;\r\n  position: fixed;\r\n  inset: 0;\r\n  height: 100%;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.theme__icon,\r\n.theme__toggle {\r\n  z-index: 1;\r\n}\r\n\r\n.theme__icon,\r\n.theme__icon-part {\r\n  position: absolute;\r\n}\r\n\r\n.theme__icon {\r\n  display: block;\r\n  top: 1.25em;\r\n  left: 0.2em;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n}\r\n\r\n.theme__icon-part {\r\n  border-radius: 50%;\r\n  box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;\r\n  top: calc(50% - 0.5em);\r\n  left: calc(50% - 0.5em);\r\n  width: 1em;\r\n  height: 1em;\r\n  transition:\r\n    box-shadow var(--transDur) ease-in-out,\r\n    opacity var(--transDur) ease-in-out,\r\n    transform var(--transDur) ease-in-out;\r\n  transform: scale(0.5);\r\n}\r\n\r\n.theme__icon-part ~ .theme__icon-part {\r\n  background-color: hsl(0, 0%, 100%);\r\n  border-radius: 0.05em;\r\n  box-shadow: none;\r\n  top: 50%;\r\n  left: calc(50% - 0.05em);\r\n  transform: rotate(0deg) translateY(0.5em);\r\n  transform-origin: 50% 0;\r\n  width: 0.1em;\r\n  height: 0.2em;\r\n}\r\n\r\n.theme__icon-part:nth-child(3) {\r\n  transform: rotate(45deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(4) {\r\n  transform: rotate(90deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(5) {\r\n  transform: rotate(135deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(6) {\r\n  transform: rotate(180deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(7) {\r\n  transform: rotate(225deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(8) {\r\n  transform: rotate(270deg) translateY(0.5em);\r\n}\r\n\r\n.theme__icon-part:nth-child(9) {\r\n  transform: rotate(315deg) translateY(0.5em);\r\n}\r\n\r\n.theme__label,\r\n.theme__toggle,\r\n.theme__toggle-wrap {\r\n  position: relative;\r\n}\r\n\r\n.theme__toggle,\r\n.theme__toggle::before {\r\n  display: block;\r\n}\r\n\r\n.theme__toggle {\r\n  background-color: hsl(48, 90%, 85%);\r\n  border-radius: 25% / 50%;\r\n  box-shadow: 0 0 0 0.125em var(--primaryT);\r\n  padding: 0.25em;\r\n  width: 6em;\r\n  height: 3em;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  transition:\r\n    background-color var(--transDur) ease-in-out,\r\n    box-shadow 0.15s ease-in-out,\r\n    transform var(--transDur) ease-in-out;\r\n}\r\n\r\n.theme__toggle::before {\r\n  background-color: hsl(48, 90%, 55%);\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n  transition:\r\n    background-color var(--transDur) ease-in-out,\r\n    transform var(--transDur) ease-in-out;\r\n  position: relative;\r\n  top: -0.28em;\r\n  left: -0.25em;\r\n}\r\n\r\n.theme__toggle:focus {\r\n  box-shadow: 0 0 0 0.125em var(--primary);\r\n  outline: transparent;\r\n}\r\n\r\n/* Checked */\r\n.theme__toggle:checked {\r\n  background-color: hsl(198, 90%, 15%);\r\n}\r\n\r\n.theme__toggle:checked::before,\r\n.theme__toggle:checked ~ .theme__icon {\r\n  transform: translateX(3em);\r\n}\r\n\r\n.theme__toggle:checked::before {\r\n  background-color: hsl(198, 90%, 55%);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__fill {\r\n  transform: translateX(0);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {\r\n  box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;\r\n  transform: scale(1);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part ~ .theme__icon-part {\r\n  opacity: 0;\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(2) {\r\n  transform: rotate(45deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(3) {\r\n  transform: rotate(90deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(4) {\r\n  transform: rotate(135deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(5) {\r\n  transform: rotate(180deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(6) {\r\n  transform: rotate(225deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(7) {\r\n  transform: rotate(270deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(8) {\r\n  transform: rotate(315deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(9) {\r\n  transform: rotate(360deg) translateY(0.8em);\r\n}\r\n\r\n.theme__toggle-wrap {\r\n  margin: 0 0.75em;\r\n}\r\n\r\n@supports selector(:focus-visible) {\r\n  .theme__toggle:focus {\r\n    box-shadow: 0 0 0 0.125em var(--primaryT);\r\n  }\r\n\r\n  .theme__toggle:focus-visible {\r\n    box-shadow: 0 0 0 0.125em var(--primary);\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 11 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);




const form = document.getElementById('leaderboard-form');
const refreshButton = document.getElementById('refresh');

(0,_modules_api_js__WEBPACK_IMPORTED_MODULE_0__.loadScores)();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_0__.addScore)();
  form.reset();
});

refreshButton.addEventListener('click', () => {
  (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_0__.loadScores)();
});
})();

/******/ })()
;