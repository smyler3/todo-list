/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/
    --sidebar-text: rgb(0, 0, 0);
    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/
    --project-icon: rgba(177, 96, 231, 0.5);
}

/*
 * ------------------------------------------------------------
 * General Styling
 * ------------------------------------------------------------
 */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

ul {
    list-style: none;
}

button {
    cursor: pointer;
}

input[type="checkbox"] {
    cursor: pointer;
}

/* input[type="checkbox"] {
    width: 2em;
    height: 2em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
input[type="checkbox"]:checked {
    background-color: var(--sidebar-hover-background);
} */

.action-btns {
    display: flex;
    align-items: center;
}

.action-btn {
    cursor: pointer;
    padding: 1rem;
}
.action-btn:hover {
    background-color: var(--sidebar-hover-background);
    border-radius: 50%;
}

/*
 * ------------------------------------------------------------
 * Page Layout Styling
 * ------------------------------------------------------------
 */

.content {
    display: grid;
    grid: 1fr 5fr auto / 1fr 4fr;
    min-width: 100vw;
    min-height: 100vh;
}

/*
 * ------------------------------------------------------------
 * Sidebar Styling
 * ------------------------------------------------------------
 */

.sidebar {
    grid-area: 1 / 1 / -2 / 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
    color: var(--sideabar-text);
    background-color: var(--sidebar-background);
    z-index: 2;
}

.logo {
    text-align: center;
    padding-top: 1.5rem;
}

.sidebar-heading {
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-weight: bold;
}

.sidebar-menu,
.sidebar-projects-menu {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-left: 2rem;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 0 0.8rem 1rem;
    font-size: large;
    border-radius: 10px;
}

.sidebar-item:hover {
    cursor: pointer;
    background-color: var(--sidebar-hover-background);
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    height: 20px;
    width: 20px;
}

.project-icon {
    color: var(--project-icon);
}

/*
 * ------------------------------------------------------------
 * Header Styling
 * ------------------------------------------------------------
 */

.header {
    grid-area: 1 / 2 / 2 / -1;
    background-color: #ffffff;
    box-shadow: 0 10px 15px #00000025;
    z-index: 1;
}

/*
 * ----------------------
 * Project Header Styling
 * ----------------------
 */
.project-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem 0 3rem;
    text-align: center;
    height: 100%;
}

.project-header-details {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.project-header-title {

}

.project-header-description {

}
/*
 * ------------------------------------------------------------
 * Content Body Styling
 * ------------------------------------------------------------
 */

.content-body {
    grid-area: 2 / 2 / -2 / -1;
    background-color: rgb(226, 232, 240);
}

/*
 * ----------------------
 * Project Content Styling
 * ----------------------
 */
.task-list-container,
.step-list {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-left: 2rem;
    gap: 10px;
    margin-top: 10px;
}

.project-task-item {
    margin-top: 1rem;
}

.task-list {
    padding: 0 2rem 1rem;
}

.project-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem 1rem;
    font-size: large;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 15px #00000025;
} 

.project-list-item-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.project-list-task-details {
    display: flex;
    flex-direction: column;
}

.project-list-step-info {
    display: flex;
    flex-direction: column;
}

/*
 * ------------------------------------------------------------
 * Footer Styling
 * ------------------------------------------------------------
 */

.footer {
    grid-area: -2 / 1 / -1 / -1;
    text-align: center;
    padding: 1rem 0;
    background-color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C,EAAE,4BAA4B;IAC5E,4BAA4B;IAC5B,qDAAqD,EAAE,qDAAqD;IAC5G,uCAAuC;AAC3C;;AAEA;;;;EAIE;AACF;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,iDAAiD;IACjD,kBAAkB;AACtB;;AAEA;;;;EAIE;;AAEF;IACI,aAAa;IACb,4BAA4B;IAC5B,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,2BAA2B;IAC3B,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;;;EAIE;;AAEF;IACI,yBAAyB;IACzB,yBAAyB;IACzB,iCAAiC;IACjC,UAAU;AACd;;AAEA;;;;EAIE;AACF;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;;AAEA;AACA;;;;EAIE;;AAEF;IACI,0BAA0B;IAC1B,oCAAoC;AACxC;;AAEA;;;;EAIE;AACF;;IAEI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;IACT,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;EAIE;;AAEF;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B","sourcesContent":[":root {\r\n    --sidebar-background: rgba(223, 163, 163, 0.3); /*rgba(255, 198, 112, 0.05)*/\r\n    --sidebar-text: rgb(0, 0, 0);\r\n    --sidebar-hover-background: rgba(191, 112, 255, 0.15); /*rgba(226, 112, 255, 0.5) rgba(255, 141, 112, 0.15)*/\r\n    --project-icon: rgba(177, 96, 231, 0.5);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * General Styling\r\n * ------------------------------------------------------------\r\n */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    cursor: pointer;\r\n}\r\n\r\n/* input[type=\"checkbox\"] {\r\n    width: 2em;\r\n    height: 2em;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    border: 1px solid #ddd;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\ninput[type=\"checkbox\"]:checked {\r\n    background-color: var(--sidebar-hover-background);\r\n} */\r\n\r\n.action-btns {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.action-btn {\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\n.action-btn:hover {\r\n    background-color: var(--sidebar-hover-background);\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Page Layout Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content {\r\n    display: grid;\r\n    grid: 1fr 5fr auto / 1fr 4fr;\r\n    min-width: 100vw;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Sidebar Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.sidebar {\r\n    grid-area: 1 / 1 / -2 / 2;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 0 1rem;\r\n    color: var(--sideabar-text);\r\n    background-color: var(--sidebar-background);\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.sidebar-heading {\r\n    padding: 0.5rem 0 0.5rem 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar-menu,\r\n.sidebar-projects-menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.sidebar-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.8rem 0 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n}\r\n\r\n.sidebar-item:hover {\r\n    cursor: pointer;\r\n    background-color: var(--sidebar-hover-background);\r\n}\r\n\r\n.icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: x-large;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.project-icon {\r\n    color: var(--project-icon);\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Header Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.header {\r\n    grid-area: 1 / 2 / 2 / -1;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 10px 15px #00000025;\r\n    z-index: 1;\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Header Styling\r\n * ----------------------\r\n */\r\n.project-header-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 3rem 0 3rem;\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n\r\n.project-header-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n}\r\n\r\n.project-header-title {\r\n\r\n}\r\n\r\n.project-header-description {\r\n\r\n}\r\n/*\r\n * ------------------------------------------------------------\r\n * Content Body Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.content-body {\r\n    grid-area: 2 / 2 / -2 / -1;\r\n    background-color: rgb(226, 232, 240);\r\n}\r\n\r\n/*\r\n * ----------------------\r\n * Project Content Styling\r\n * ----------------------\r\n */\r\n.task-list-container,\r\n.step-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.2rem;\r\n    padding-left: 2rem;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.project-task-item {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.task-list {\r\n    padding: 0 2rem 1rem;\r\n}\r\n\r\n.project-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    padding: 0.8rem 1rem;\r\n    font-size: large;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n    box-shadow: 0 10px 15px #00000025;\r\n} \r\n\r\n.project-list-item-info {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-list-task-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.project-list-step-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n * ------------------------------------------------------------\r\n * Footer Styling\r\n * ------------------------------------------------------------\r\n */\r\n\r\n.footer {\r\n    grid-area: -2 / 1 / -1 / -1;\r\n    text-align: center;\r\n    padding: 1rem 0;\r\n    background-color: #ffffff;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/factories/projectFactory.js":
/*!*****************************************!*\
  !*** ./src/factories/projectFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFactory)
/* harmony export */ });
/* Creates a single instance of a project object */
function projectFactory(title, description, dueDate, priority, status) {
    const tasks = [];

    return { title, description, dueDate, priority, status, tasks };
}

/***/ }),

/***/ "./src/factories/stepFactory.js":
/*!**************************************!*\
  !*** ./src/factories/stepFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stepFactory)
/* harmony export */ });
/* Creates a single instance of a step object */
function stepFactory(title, dueDate, status) {
    return { title, dueDate, status }
}

/***/ }),

/***/ "./src/factories/taskFactory.js":
/*!**************************************!*\
  !*** ./src/factories/taskFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskFactory)
/* harmony export */ });
/* Creates a single instance of a task object */
function taskFactory(title, description, dueDate, priority, status) {
    const steps = [];

    return { title, description, dueDate, priority, status, steps };
}

/***/ }),

/***/ "./src/handlers/display.js":
/*!*********************************!*\
  !*** ./src/handlers/display.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSidebarProjects: () => (/* binding */ renderSidebarProjects)
/* harmony export */ });
function renderSidebarProjects(projects) {
    for (let project of projects) {
        const sidebarItem = document.createElement("li");
        sidebarItem.classList.add("sidebar-item");

        // Icon
        const projectIcon = document.createElement("span");
        projectIcon.textContent = "●";
        projectIcon.classList.add("icon", "project-icon");

        // Title
        const projectTitle = document.createElement("p");
        projectTitle.textContent = project.title;

        sidebarItem.appendChild(projectIcon);
        sidebarItem.appendChild(projectTitle);

        sidebar.appendChild(sidebarItem);
    }
}

function addSidebarProject() {

}

function removeSidebarProject() {

}

function editSidebarProject() {

}

const sidebar = document.querySelector(".sidebar-projects-menu");



/***/ }),

/***/ "./src/handlers/enums/priority.js":
/*!****************************************!*\
  !*** ./src/handlers/enums/priority.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Priority: () => (/* binding */ Priority),
/* harmony export */   isValidPriority: () => (/* binding */ isValidPriority)
/* harmony export */ });
/* Priority ENUM */
const Priority = {
    HIGH: "High",
    MED: "Med",
    LOW: "Low",
    NONE: "-",
}

/* Checks whether the priority value is valid */
function isValidPriority(priority) {
    return Object.values(Priority).includes(priority);
}



/***/ }),

/***/ "./src/handlers/enums/status.js":
/*!**************************************!*\
  !*** ./src/handlers/enums/status.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* binding */ Status),
/* harmony export */   isValidStatus: () => (/* binding */ isValidStatus)
/* harmony export */ });
/* Status ENUM */
const Status = {
    DONE: "Done",
    DOING: "Doing",
    TODO: "To Do",
}

/* Checks whether the status property is valid */
function isValidStatus(status) {
    return Object.values(Status).includes(status);
}



/***/ }),

/***/ "./src/handlers/organizers/project.js":
/*!********************************************!*\
  !*** ./src/handlers/organizers/project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/projectFactory */ "./src/factories/projectFactory.js");
/* harmony import */ var _enums_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/priority */ "./src/handlers/enums/priority.js");
/* harmony import */ var _enums_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/status */ "./src/handlers/enums/status.js");




/* Creates the default project that stores all unassigned tasks */
function createDefaultProject() {
    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Miscellaneous", 
        "A collection of tasks, that weren't assigned a project",
        "",
        _enums_priority__WEBPACK_IMPORTED_MODULE_1__.Priority.NONE,
        _enums_status__WEBPACK_IMPORTED_MODULE_2__.Status.TODO,
    )
}

/* Create a new project */
function createProject(name, description, dueDate, priority, status) {
    return (0,_factories_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(
        name,
        description,
        dueDate,
        priority,
        status,
    )
}

/* Add a task to a project */
function addTask(project, task) {
    project.tasks.push(task);
}

/* Edit an exisiting project */
function editProject(project, name, description, dueDate, priority, status) {
    setName(project, name);
    setDescription(project, description);
    setDueDate(project, dueDate);
    setPriority(project, priority);
    setStatus(project, status);
}

/* Delete an existing project */
function deleteProject(project) {
    delete project.name;
    delete project.description;
    delete project.dueDate;
    delete project.priority;
    delete project.status;
}

function setName(project, name) {
    project.name = name;
}

function setDescription(project, description) {
    project.description = description;
}

function setDueDate(project, dueDate) {
    project.dueDate = dueDate;
}

function setPriority(project, priority) {
    project.priority = priority;
}

function setStatus(project, status) {
    project.status = status;
}



/***/ }),

/***/ "./src/handlers/organizers/step.js":
/*!*****************************************!*\
  !*** ./src/handlers/organizers/step.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStep: () => (/* binding */ createStep),
/* harmony export */   deleteStep: () => (/* binding */ deleteStep),
/* harmony export */   editStep: () => (/* binding */ editStep)
/* harmony export */ });
/* harmony import */ var _factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/stepFactory */ "./src/factories/stepFactory.js");


/* Create a new step */
function createStep(name, dueDate, status) {
    return (0,_factories_stepFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, dueDate, status);
}

/* Edit an existing step */
function editStep(step, name, dueDate, status) {
    setName(step, name);
    setDueDate(step, dueDate);
    setStatus(step, status);
}

/* Delete an exisiting step */
function deleteStep(step) {
    delete step.name;
    delete step.dueDate;
    delete step.status;
}

function setName(step, name) {
    step.name = name;
}

function setDueDate(step, dueDate) {
    step.dueDate = dueDate;
}

function setStatus(step, status) {
    step.status = status;
}



/***/ }),

/***/ "./src/handlers/organizers/task.js":
/*!*****************************************!*\
  !*** ./src/handlers/organizers/task.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addStep: () => (/* binding */ addStep),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/taskFactory */ "./src/factories/taskFactory.js");


/* Create a new task */
function createTask(name, description, dueDate, priority, status) {
    return (0,_factories_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, dueDate, priority, status);
}

/* Add a step to a task */
function addStep(task, step) {
    task.steps.push(step);
}

/* Edit an existing task */
function editTask(task, name, description, dueDate, priority, status) {
    setName(task, name);
    setDescription(task, description);
    setDueDate(task, dueDate);
    setPriority(task, priority);
    setStatus(task, status);
}

/* Delete an exisiting task */
function deleteTask(task) {
    delete task.name;
    delete task.description;
    delete task.dueDate;
    delete task.priority;
    delete task.status;
}

function setName(task, name) {
    task.name = name;
}

function setDescription(task, description) {
    task.description = description;
}

function setDueDate(task, dueDate) {
    task.dueDate = dueDate;
}

function setPriority(task, priority) {
    task.priority = priority;
}

function setStatus(task, status) {
    task.status = status;
}



/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _tasksGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksGenerator */ "./src/tasksGenerator.js");


/* */
function renderProjectPage(project) {
    /* */
    function generateProjectPageHeader(project) {
        /* */
        function generateProjectDetails(project) {
            const projectHeaderInfo = document.createElement("span");
            projectHeaderInfo.classList.add("project-header-details");

            // Title
            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.title;
            projectTitle.classList.add("project-header-title");

            // Description
            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;
            projectDescription.classList.add("project-header-description");

            // Date
            const projectDate = document.createElement("p");
            projectDate.textContent = project.dueDate || "No Due Date";

            // Append Elements
            projectHeaderInfo.appendChild(projectTitle);
            projectHeaderInfo.appendChild(projectDescription);
            projectHeaderInfo.appendChild(projectDate);

            return projectHeaderInfo;
        }

        // Project Buttons to be created
        const projectButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Task"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Project"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Project"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Project"},
        ]

        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header-container");

        // Append Elements
        projectHeader.appendChild(generateProjectDetails(project));
        projectHeader.appendChild(generateActionButtons(projectButtons));

        return projectHeader;

            // <div class="project-header-container">
            //     <span class="project-header-details">
            //         <h2 class="project-header-title">Work Meetings</h2>
            //         <p class="project-header-description">All things work meeting related!</p>
            //         <p>2022-Dec-18</p>
            //     </span>
            //     <span class="action-btns">
            //         <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Task"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Project"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Project"></span>
            //         <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Project"></span>
            //     </span>
            // </div>
    }

    /* */
    function generateProjectPageContent(project) {
        const taskListContainer = document.createElement("div");
        taskListContainer.classList.add("task-list-container");

        taskListContainer.appendChild((0,_tasksGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(project.tasks, generateActionButtons));

        return taskListContainer;
    }

    // Appending Header
    const header = document.querySelector(".header");
    header.appendChild(generateProjectPageHeader(project));

    // Appending Body
    const body = document.querySelector(".content-body");
    body.appendChild(generateProjectPageContent(project));
        
        {/* <div class="task-list-container">
            <!-- List of tasks for the project -->
            <ul class="task-list">
                <!-- Meetings -->
                <li class="project-task-item">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="" class="task-checkbox">
                            <div class="project-list-task-description">
                                <h3>Meetings</h3>
                                <p>All monday work meetings</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="action-btns">
                            <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="step-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Morning Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Afternoon Meeting</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>

                <!-- Reports -->
                <li class="project-task-item">
                    <div class="project-list-item">
                        <span class="project-list-item-info">
                            <input type="checkbox" name="" id="" class="task-checkbox">
                            <div class="project-list-task-description">
                                <h3>Reports</h3>
                                <p>Finance Report 22-23 (Week 14)</p>
                                <p>2022-Dec-12</p>
                            </div>
                        </span>
                        <span class="action-btns">
                            <span class="icon action-btn"><img src="../src/assets/icons/add.svg" alt="" title="Add New Step"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/paint.svg" alt="" title="Colour Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Task"></span>
                            <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Task"></span>
                        </span>
                    </div>
                    <!-- List of steps for the task -->
                    <ul class="step-list">
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Create Financial Figures</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                        <li class="task-step project-list-item">
                            <span class="project-list-item-info">
                                <input type="checkbox" name="" id="" class="task-checkbox">
                                <span class="project-list-step-info">
                                    <h4>Check for Typos</h4>
                                    <p>2022-Dec-11</p>
                                </span>
                            </span>
                            <span class="action-btns">
                                <span class="icon action-btn"><img src="../src/assets/icons/edit.svg" alt="" title="Edit Step"></span>
                                <span class="icon action-btn"><img src="../src/assets/icons/delete.svg" alt="" title="Delete Step"></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> */}
}

function generateActionButtons(buttons) {
    const actionBtns = document.createElement("span");
    actionBtns.classList.add("action-btns");

    // Project Buttons
    buttons.forEach(btn => {
        // Button Container
        const actionButtonContainer = document.createElement("span");
        actionButtonContainer.classList.add("icon", "action-btn");

        // Button
        const actionBtn = document.createElement("img");
        actionBtn.src = btn.src;
        actionBtn.alt = btn.alt;
        actionBtn.title = btn.title;

        // Append Elements
        actionButtonContainer.appendChild(actionBtn);

        actionBtns.appendChild(actionButtonContainer);
    })

    return actionBtns;
}

/***/ }),

/***/ "./src/stepGenerator.js":
/*!******************************!*\
  !*** ./src/stepGenerator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateSteps)
/* harmony export */ });
/* Create a list of steps for a task */
function generateSteps(steps, generateActionButtons) {
    /* Create a step item */
    function generateStep(step) {
        // Step Buttons to be created
        const stepButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        const stepItem = document.createElement("li");
        stepItem.classList.add("project-list-item");

        // Step Information
        const stepInfo = document.createElement("span");
        stepInfo.classList.add("project-list-item-info");

        // Completion Checkbox
        const completedCheckbox = document.createElement("input");
        completedCheckbox.classList.add("task-checkbox");
        completedCheckbox.type = "checkbox";
        completedCheckbox.name = "";
        completedCheckbox.id = "";

        stepInfo.appendChild(completedCheckbox);

        // Step Details
        const stepDetails = document.createElement("span");
        stepDetails.classList.add("step-details");

        // Title
        const stepTitle = document.createElement("h4");
        stepTitle.textContent = step.title;

        // Date
        const stepDate = document.createElement("p");
        stepDate.textContent = step.dueDate || "No Due Date";

        // Action Buttons for Steps
        const stepActionButtons = generateActionButtons(stepButtons);

        // Append Elements
        stepDetails.appendChild(stepTitle);
        stepDetails.appendChild(stepDate);

        stepInfo.appendChild(stepDetails);

        stepItem.appendChild(stepInfo);
        stepItem.appendChild(stepActionButtons);

        return stepItem;
    }

    const stepList = document.createElement("ul");
    stepList.classList.add("step-list");

    steps.forEach(step => {
        stepList.appendChild(generateStep(step));
    });

    return stepList;
}

/***/ }),

/***/ "./src/tasksGenerator.js":
/*!*******************************!*\
  !*** ./src/tasksGenerator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTasks)
/* harmony export */ });
/* harmony import */ var _stepGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stepGenerator */ "./src/stepGenerator.js");


/* Create a list of tasks for a project */
function generateTasks(tasks, generateActionButtons) {
    /* Create a task item */
    function generateTask(task) {
        /* Create the checkbox and details of the task */
        function generateTaskHeader(task) {
            /* Display information about the task */
            function generateTaskDetails(task) {
                const taskDetails = document.createElement("div");
                taskDetails.classList.add("project-list-task-details");

                const taskTitle = document.createElement("h3");
                taskTitle.textContent = task.title;

                const taskDescription = document.createElement("p");
                taskDescription.textContent = task.description;

                const taskDate = document.createElement("p");
                taskDate.textContent = task.dueDate || "No Due Date";;

                taskDetails.appendChild(taskTitle);
                taskDetails.appendChild(taskDescription);
                taskDetails.appendChild(taskDate);

                return taskDetails;
            }

            const projectListItemInfo = document.createElement("span");
            projectListItemInfo.classList.add("project-list-item-info");

            // Completion Checkbox
            const completedCheckbox = document.createElement("input");
            completedCheckbox.classList.add("task-checkbox");
            completedCheckbox.type = "checkbox";
            completedCheckbox.name = "";
            completedCheckbox.id = "";

            // Append Elements
            projectListItemInfo.appendChild(completedCheckbox);
            projectListItemInfo.appendChild(generateTaskDetails(task));

            return projectListItemInfo;
        }

        // Task Buttons to be created
        const taskButtons = [
            {src: "../src/assets/icons/add.svg", alt: "", title: "Add New Step"},
            {src: "../src/assets/icons/paint.svg", alt: "", title: "Colour Task"},
            {src: "../src/assets/icons/edit.svg", alt: "", title: "Edit Task"},
            {src: "../src/assets/icons/delete.svg", alt: "", title: "Delete Task"},
        ]

        // Task Information
        const taskItem = document.createElement("div");
        taskItem.classList.add("project-list-item");

        // Append Task Information Elements
        taskItem.appendChild(generateTaskHeader(task));
        taskItem.appendChild(generateActionButtons(taskButtons));

        return taskItem;
    }

    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    // Add all tasks to the list
    tasks.forEach(task => {
        const projectTaskItem = document.createElement("li");
        projectTaskItem.classList.add("project-task-item");

        // Create task
        projectTaskItem.appendChild(generateTask(task));
        // Create steps
        projectTaskItem.appendChild((0,_stepGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(task.steps, generateActionButtons));

        taskList.appendChild(projectTaskItem);
    })

    return taskList;
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/organizers/project */ "./src/handlers/organizers/project.js");
/* harmony import */ var _handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/organizers/task */ "./src/handlers/organizers/task.js");
/* harmony import */ var _handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/organizers/step */ "./src/handlers/organizers/step.js");
/* harmony import */ var _handlers_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/display */ "./src/handlers/display.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectPage */ "./src/projectPage.js");







const projects = []
projects.push((0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)());

// Work project/tasks/steps
const work = (0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("Work Meetings", "All things work meeting related!", "", "High", "TODO");

const meetings = (0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)("Monday Meetings", "All monday work meetings", "", "Med", "TODO");
const mornMeeting = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Morning Meeting", "2023-12-10", "TODO");
const arvoMeeting = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Afternoon Meeting", "2023-12-10", "TODO");
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(meetings, mornMeeting);
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(meetings, arvoMeeting);
(0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.addTask)(work, meetings);

const presentations = (0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.createTask)("Presentation", "All work presentations", "", "High", "TODO");
const graphs = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Generate Financial Graphs", "2023-12-10", "TODO");
const typos = (0,_handlers_organizers_step__WEBPACK_IMPORTED_MODULE_3__.createStep)("Check report draft for typos", "2023-12-10", "TODO");
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(presentations, graphs);
(0,_handlers_organizers_task__WEBPACK_IMPORTED_MODULE_2__.addStep)(presentations, typos);
(0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.addTask)(work, presentations);

// School project/tasks/steps
const school = (0,_handlers_organizers_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("School", "All things school related!", "2021-11-7", "High", "TODO");

projects.push(work);
projects.push(school);

console.log(projects);
(0,_handlers_display__WEBPACK_IMPORTED_MODULE_4__.renderSidebarProjects)(projects);
(0,_projectPage__WEBPACK_IMPORTED_MODULE_5__["default"])(projects[1]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFRLHFEQUFRO0FBQ2hCLFFBQVEsaURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRDZDO0FBQzdDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtRUFBbUU7QUFDaEYsYUFBYSx1RUFBdUU7QUFDcEYsYUFBYSxvRUFBb0U7QUFDakYsYUFBYSx3RUFBd0U7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkRBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUVBQW1FO0FBQ2hGLGFBQWEsb0VBQW9FO0FBQ2pGLGFBQWEsaUVBQWlFO0FBQzlFLGFBQWEscUVBQXFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRDRDO0FBQzVDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFtRTtBQUNoRixhQUFhLG9FQUFvRTtBQUNqRixhQUFhLGlFQUFpRTtBQUM5RSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQWE7QUFDakQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7OztVQ2xGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0U7QUFDNUI7QUFDVDtBQUNHO0FBQ2I7QUFDOUM7QUFDQTtBQUNBLGNBQWMsa0ZBQW9CO0FBQ2xDO0FBQ0E7QUFDQSxhQUFhLDJFQUFhO0FBQzFCO0FBQ0EsaUJBQWlCLHFFQUFVO0FBQzNCLG9CQUFvQixxRUFBVTtBQUM5QixvQkFBb0IscUVBQVU7QUFDOUIsa0VBQU87QUFDUCxrRUFBTztBQUNQLHFFQUFPO0FBQ1A7QUFDQSxzQkFBc0IscUVBQVU7QUFDaEMsZUFBZSxxRUFBVTtBQUN6QixjQUFjLHFFQUFVO0FBQ3hCLGtFQUFPO0FBQ1Asa0VBQU87QUFDUCxxRUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLDJFQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBcUI7QUFDckIsd0RBQWlCLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yaWVzL3N0ZXBGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL2VudW1zL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVycy9lbnVtcy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXJzL29yZ2FuaXplcnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMvb3JnYW5pemVycy9zdGVwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVycy9vcmdhbml6ZXJzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdGVwR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrc0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXHJcbiAgICAtLXNpZGViYXItdGV4dDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQ6IHJnYmEoMTkxLCAxMTIsIDI1NSwgMC4xNSk7IC8qcmdiYSgyMjYsIDExMiwgMjU1LCAwLjUpIHJnYmEoMjU1LCAxNDEsIDExMiwgMC4xNSkqL1xyXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogR2VuZXJhbCBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xyXG59ICovXHJcblxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmFjdGlvbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBhZ2UgTGF5b3V0IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQ6IDFmciA1ZnIgYXV0byAvIDFmciA0ZnI7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBTaWRlYmFyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0yIC8gMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGVhYmFyLXRleHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2lkZWJhci1tZW51LFxyXG4uc2lkZWJhci1wcm9qZWN0cy1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMCAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLnByb2plY3QtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcclxufVxyXG5cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEhlYWRlciBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbSAwIDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xyXG5cclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuXHJcbn1cclxuLypcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbi5jb250ZW50LWJvZHkge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0yIC8gLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJvamVjdCBDb250ZW50IFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuLnRhc2stbGlzdC1jb250YWluZXIsXHJcbi5zdGVwLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRhc2staXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbSAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XHJcbn0gXHJcblxyXG4ucHJvamVjdC1saXN0LWl0ZW0taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtbGlzdC10YXNrLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qtc3RlcC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRm9vdGVyIFN0eWxpbmdcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBncmlkLWFyZWE6IC0yIC8gMSAvIC0xIC8gLTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDLEVBQUUsNEJBQTRCO0lBQzVFLDRCQUE0QjtJQUM1QixxREFBcUQsRUFBRSxxREFBcUQ7SUFDNUcsdUNBQXVDO0FBQzNDOztBQUVBOzs7O0VBSUU7QUFDRjtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztFQUlFOztBQUVGO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBOzs7O0VBSUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7O0FBRUE7Ozs7RUFJRTtBQUNGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztFQUlFOztBQUVGO0lBQ0ksMEJBQTBCO0lBQzFCLG9DQUFvQztBQUN4Qzs7QUFFQTs7OztFQUlFO0FBQ0Y7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7RUFJRTs7QUFFRjtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiByZ2JhKDIyMywgMTYzLCAxNjMsIDAuMyk7IC8qcmdiYSgyNTUsIDE5OCwgMTEyLCAwLjA1KSovXFxyXFxuICAgIC0tc2lkZWJhci10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0tc2lkZWJhci1ob3Zlci1iYWNrZ3JvdW5kOiByZ2JhKDE5MSwgMTEyLCAyNTUsIDAuMTUpOyAvKnJnYmEoMjI2LCAxMTIsIDI1NSwgMC41KSByZ2JhKDI1NSwgMTQxLCAxMTIsIDAuMTUpKi9cXHJcXG4gICAgLS1wcm9qZWN0LWljb246IHJnYmEoMTc3LCA5NiwgMjMxLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEdlbmVyYWwgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMmVtO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxufSAqL1xcclxcblxcclxcbi5hY3Rpb24tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG4uYWN0aW9uLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItaG92ZXItYmFja2dyb3VuZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBQYWdlIExheW91dCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAxZnIgNWZyIGF1dG8gLyAxZnIgNGZyO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBTaWRlYmFyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMiAvIDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWFiYXItdGV4dCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1oZWFkaW5nIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW1lbnUsXFxyXFxuLnNpZGViYXItcHJvamVjdHMtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAwIDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWhvdmVyLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4gKiBIZWFkZXIgU3R5bGluZ1xcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAjMDAwMDAwMjU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgSGVhZGVyIFN0eWxpbmdcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuLnByb2plY3QtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtIDAgM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlci1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItdGl0bGUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXItZGVzY3JpcHRpb24ge1xcclxcblxcclxcbn1cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIENvbnRlbnQgQm9keSBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmNvbnRlbnQtYm9keSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMiAvIC0xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIFByb2plY3QgQ29udGVudCBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqL1xcclxcbi50YXNrLWxpc3QtY29udGFpbmVyLFxcclxcbi5zdGVwLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2staXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggIzAwMDAwMDI1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtdGFzay1kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1zdGVwLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiAqIEZvb3RlciBTdHlsaW5nXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogLTIgLyAxIC8gLTEgLyAtMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBDcmVhdGVzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgcHJvamVjdCBvYmplY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgdGFza3MgfTtcclxufSIsIi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBzdGVwIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGVwRmFjdG9yeSh0aXRsZSwgZHVlRGF0ZSwgc3RhdHVzKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgc3RhdHVzIH1cclxufSIsIi8qIENyZWF0ZXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSB0YXNrIG9iamVjdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIGNvbnN0IHN0ZXBzID0gW107XHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBzdGVwcyB9O1xyXG59IiwiZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgc2lkZWJhckl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gSWNvblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvamVjdEljb24udGV4dENvbnRlbnQgPSBcIuKXj1wiO1xyXG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwicHJvamVjdC1pY29uXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcblxyXG4gICAgICAgIHNpZGViYXJJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcclxuICAgICAgICBzaWRlYmFySXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJJdGVtKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2lkZWJhclByb2plY3QoKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTaWRlYmFyUHJvamVjdCgpIHtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRTaWRlYmFyUHJvamVjdCgpIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItcHJvamVjdHMtbWVudVwiKTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlclNpZGViYXJQcm9qZWN0cyB9IiwiLyogUHJpb3JpdHkgRU5VTSAqL1xyXG5jb25zdCBQcmlvcml0eSA9IHtcclxuICAgIEhJR0g6IFwiSGlnaFwiLFxyXG4gICAgTUVEOiBcIk1lZFwiLFxyXG4gICAgTE9XOiBcIkxvd1wiLFxyXG4gICAgTk9ORTogXCItXCIsXHJcbn1cclxuXHJcbi8qIENoZWNrcyB3aGV0aGVyIHRoZSBwcmlvcml0eSB2YWx1ZSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkUHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFByaW9yaXR5KS5pbmNsdWRlcyhwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByaW9yaXR5LCBpc1ZhbGlkUHJpb3JpdHkgfSIsIi8qIFN0YXR1cyBFTlVNICovXHJcbmNvbnN0IFN0YXR1cyA9IHtcclxuICAgIERPTkU6IFwiRG9uZVwiLFxyXG4gICAgRE9JTkc6IFwiRG9pbmdcIixcclxuICAgIFRPRE86IFwiVG8gRG9cIixcclxufVxyXG5cclxuLyogQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXR1cyBwcm9wZXJ0eSBpcyB2YWxpZCAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdHVzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoU3RhdHVzKS5pbmNsdWRlcyhzdGF0dXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTdGF0dXMsIGlzVmFsaWRTdGF0dXMgfSIsImltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tIFwiLi4vLi4vZmFjdG9yaWVzL3Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSBcIi4uL2VudW1zL3ByaW9yaXR5XCI7XHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9lbnVtcy9zdGF0dXNcIjtcclxuXHJcbi8qIENyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdCB0aGF0IHN0b3JlcyBhbGwgdW5hc3NpZ25lZCB0YXNrcyAqL1xyXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBcIk1pc2NlbGxhbmVvdXNcIiwgXHJcbiAgICAgICAgXCJBIGNvbGxlY3Rpb24gb2YgdGFza3MsIHRoYXQgd2VyZW4ndCBhc3NpZ25lZCBhIHByb2plY3RcIixcclxuICAgICAgICBcIlwiLFxyXG4gICAgICAgIFByaW9yaXR5Lk5PTkUsXHJcbiAgICAgICAgU3RhdHVzLlRPRE8sXHJcbiAgICApXHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIG5ldyBwcm9qZWN0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHJldHVybiBwcm9qZWN0RmFjdG9yeShcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgKVxyXG59XHJcblxyXG4vKiBBZGQgYSB0YXNrIHRvIGEgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBhZGRUYXNrKHByb2plY3QsIHRhc2spIHtcclxuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcclxufVxyXG5cclxuLyogRWRpdCBhbiBleGlzaXRpbmcgcHJvamVjdCAqL1xyXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xyXG4gICAgc2V0TmFtZShwcm9qZWN0LCBuYW1lKTtcclxuICAgIHNldERlc2NyaXB0aW9uKHByb2plY3QsIGRlc2NyaXB0aW9uKTtcclxuICAgIHNldER1ZURhdGUocHJvamVjdCwgZHVlRGF0ZSk7XHJcbiAgICBzZXRQcmlvcml0eShwcm9qZWN0LCBwcmlvcml0eSk7XHJcbiAgICBzZXRTdGF0dXMocHJvamVjdCwgc3RhdHVzKTtcclxufVxyXG5cclxuLyogRGVsZXRlIGFuIGV4aXN0aW5nIHByb2plY3QgKi9cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBkZWxldGUgcHJvamVjdC5uYW1lO1xyXG4gICAgZGVsZXRlIHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICBkZWxldGUgcHJvamVjdC5kdWVEYXRlO1xyXG4gICAgZGVsZXRlIHByb2plY3QucHJpb3JpdHk7XHJcbiAgICBkZWxldGUgcHJvamVjdC5zdGF0dXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5hbWUocHJvamVjdCwgbmFtZSkge1xyXG4gICAgcHJvamVjdC5uYW1lID0gbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24ocHJvamVjdCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RHVlRGF0ZShwcm9qZWN0LCBkdWVEYXRlKSB7XHJcbiAgICBwcm9qZWN0LmR1ZURhdGUgPSBkdWVEYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcmlvcml0eShwcm9qZWN0LCBwcmlvcml0eSkge1xyXG4gICAgcHJvamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0dXMocHJvamVjdCwgc3RhdHVzKSB7XHJcbiAgICBwcm9qZWN0LnN0YXR1cyA9IHN0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRGVmYXVsdFByb2plY3QsIGNyZWF0ZVByb2plY3QsIGFkZFRhc2ssIGVkaXRQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgc3RlcEZhY3RvcnkgZnJvbSBcIi4uLy4uL2ZhY3Rvcmllcy9zdGVwRmFjdG9yeVwiO1xyXG5cclxuLyogQ3JlYXRlIGEgbmV3IHN0ZXAgKi9cclxuZnVuY3Rpb24gY3JlYXRlU3RlcChuYW1lLCBkdWVEYXRlLCBzdGF0dXMpIHtcclxuICAgIHJldHVybiBzdGVwRmFjdG9yeShuYW1lLCBkdWVEYXRlLCBzdGF0dXMpO1xyXG59XHJcblxyXG4vKiBFZGl0IGFuIGV4aXN0aW5nIHN0ZXAgKi9cclxuZnVuY3Rpb24gZWRpdFN0ZXAoc3RlcCwgbmFtZSwgZHVlRGF0ZSwgc3RhdHVzKSB7XHJcbiAgICBzZXROYW1lKHN0ZXAsIG5hbWUpO1xyXG4gICAgc2V0RHVlRGF0ZShzdGVwLCBkdWVEYXRlKTtcclxuICAgIHNldFN0YXR1cyhzdGVwLCBzdGF0dXMpO1xyXG59XHJcblxyXG4vKiBEZWxldGUgYW4gZXhpc2l0aW5nIHN0ZXAgKi9cclxuZnVuY3Rpb24gZGVsZXRlU3RlcChzdGVwKSB7XHJcbiAgICBkZWxldGUgc3RlcC5uYW1lO1xyXG4gICAgZGVsZXRlIHN0ZXAuZHVlRGF0ZTtcclxuICAgIGRlbGV0ZSBzdGVwLnN0YXR1cztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmFtZShzdGVwLCBuYW1lKSB7XHJcbiAgICBzdGVwLm5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREdWVEYXRlKHN0ZXAsIGR1ZURhdGUpIHtcclxuICAgIHN0ZXAuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0YXR1cyhzdGVwLCBzdGF0dXMpIHtcclxuICAgIHN0ZXAuc3RhdHVzID0gc3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdGVwLCBlZGl0U3RlcCwgZGVsZXRlU3RlcCB9IiwiaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvdGFza0ZhY3RvcnlcIjtcclxuXHJcbi8qIENyZWF0ZSBhIG5ldyB0YXNrICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHJldHVybiB0YXNrRmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8qIEFkZCBhIHN0ZXAgdG8gYSB0YXNrICovXHJcbmZ1bmN0aW9uIGFkZFN0ZXAodGFzaywgc3RlcCkge1xyXG4gICAgdGFzay5zdGVwcy5wdXNoKHN0ZXApO1xyXG59XHJcblxyXG4vKiBFZGl0IGFuIGV4aXN0aW5nIHRhc2sgKi9cclxuZnVuY3Rpb24gZWRpdFRhc2sodGFzaywgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcclxuICAgIHNldE5hbWUodGFzaywgbmFtZSk7XHJcbiAgICBzZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbik7XHJcbiAgICBzZXREdWVEYXRlKHRhc2ssIGR1ZURhdGUpO1xyXG4gICAgc2V0UHJpb3JpdHkodGFzaywgcHJpb3JpdHkpO1xyXG4gICAgc2V0U3RhdHVzKHRhc2ssIHN0YXR1cyk7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBhbiBleGlzaXRpbmcgdGFzayAqL1xyXG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcclxuICAgIGRlbGV0ZSB0YXNrLm5hbWU7XHJcbiAgICBkZWxldGUgdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGRlbGV0ZSB0YXNrLmR1ZURhdGU7XHJcbiAgICBkZWxldGUgdGFzay5wcmlvcml0eTtcclxuICAgIGRlbGV0ZSB0YXNrLnN0YXR1cztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmFtZSh0YXNrLCBuYW1lKSB7XHJcbiAgICB0YXNrLm5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZXNjcmlwdGlvbih0YXNrLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREdWVEYXRlKHRhc2ssIGR1ZURhdGUpIHtcclxuICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByaW9yaXR5KHRhc2ssIHByaW9yaXR5KSB7XHJcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0YXR1cyh0YXNrLCBzdGF0dXMpIHtcclxuICAgIHRhc2suc3RhdHVzID0gc3RhdHVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBhZGRTdGVwLCBlZGl0VGFzaywgZGVsZXRlVGFzayB9IiwiaW1wb3J0IGdlbmVyYXRlVGFza3MgZnJvbSBcIi4vdGFza3NHZW5lcmF0b3JcIjtcclxuXHJcbi8qICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpIHtcclxuICAgIC8qICovXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RQYWdlSGVhZGVyKHByb2plY3QpIHtcclxuICAgICAgICAvKiAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVySW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRpdGxlXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci10aXRsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGF0ZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3QuZHVlRGF0ZSB8fCBcIk5vIER1ZSBEYXRlXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgcHJvamVjdEhlYWRlckluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXJJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBCdXR0b25zIHRvIGJlIGNyZWF0ZWRcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IFtcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJBZGQgTmV3IFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJDb2xvdXIgUHJvamVjdFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL2VkaXQuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRWRpdCBQcm9qZWN0XCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkRlbGV0ZSBQcm9qZWN0XCJ9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdERldGFpbHMocHJvamVjdCkpO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHByb2plY3RCdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SGVhZGVyO1xyXG5cclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAvLyAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC1oZWFkZXItdGl0bGVcIj5Xb3JrIE1lZXRpbmdzPC9oMj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtaGVhZGVyLWRlc2NyaXB0aW9uXCI+QWxsIHRoaW5ncyB3b3JrIG1lZXRpbmcgcmVsYXRlZCE8L3A+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPHA+MjAyMi1EZWMtMTg8L3A+XHJcbiAgICAgICAgICAgIC8vICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIC8vICAgICA8c3BhbiBjbGFzcz1cImFjdGlvbi1idG5zXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFjdGlvbi1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiQWRkIE5ldyBUYXNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiQ29sb3VyIFByb2plY3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFjdGlvbi1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkVkaXQgUHJvamVjdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgLy8gICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgdGl0bGU9XCJEZWxldGUgUHJvamVjdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgLy8gICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgLyogKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhZ2VDb250ZW50KHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stbGlzdC1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza3MocHJvamVjdC50YXNrcywgZ2VuZXJhdGVBY3Rpb25CdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RQYWdlSGVhZGVyKHByb2plY3QpKTtcclxuXHJcbiAgICAvLyBBcHBlbmRpbmcgQm9keVxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib2R5XCIpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RQYWdlQ29udGVudChwcm9qZWN0KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJ0YXNrLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDwhLS0gTGlzdCBvZiB0YXNrcyBmb3IgdGhlIHByb2plY3QgLS0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRhc2stbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBNZWV0aW5ncyAtLT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtdGFzay1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdC10YXNrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1lZXRpbmdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbGwgbW9uZGF5IHdvcmsgbWVldGluZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAyMi1EZWMtMTI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvbi1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9hZGQuc3ZnXCIgYWx0PVwiXCIgdGl0bGU9XCJBZGQgTmV3IFN0ZXBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9wYWludC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkNvbG91ciBUYXNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFjdGlvbi1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkVkaXQgVGFza1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkRlbGV0ZSBUYXNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMaXN0IG9mIHN0ZXBzIGZvciB0aGUgdGFzayAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGVwLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFzay1zdGVwIHByb2plY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbGlzdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWxpc3Qtc3RlcC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Nb3JuaW5nIE1lZXRpbmc8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDIyLURlYy0xMTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGlvbi1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFjdGlvbi1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkVkaXQgU3RlcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgdGl0bGU9XCJEZWxldGUgU3RlcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFzay1zdGVwIHByb2plY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbGlzdC1pdGVtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWxpc3Qtc3RlcC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5BZnRlcm5vb24gTWVldGluZzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMjItRGVjLTExPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiRWRpdCBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkRlbGV0ZSBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gUmVwb3J0cyAtLT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtdGFzay1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdC10YXNrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJlcG9ydHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpbmFuY2UgUmVwb3J0IDIyLTIzIChXZWVrIDE0KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDIyLURlYy0xMjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2FkZC5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkFkZCBOZXcgU3RlcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiQ29sb3VyIFRhc2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiRWRpdCBUYXNrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFjdGlvbi1idG5cIj48aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiRGVsZXRlIFRhc2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIExpc3Qgb2Ygc3RlcHMgZm9yIHRoZSB0YXNrIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInN0ZXAtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YXNrLXN0ZXAgcHJvamVjdC1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzcz1cInRhc2stY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbGlzdC1zdGVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNyZWF0ZSBGaW5hbmNpYWwgRmlndXJlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMjItRGVjLTExPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiRWRpdCBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkRlbGV0ZSBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YXNrLXN0ZXAgcHJvamVjdC1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzcz1cInRhc2stY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbGlzdC1zdGVwLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNoZWNrIGZvciBUeXBvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMjItRGVjLTExPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aW9uLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYWN0aW9uLWJ0blwiPjxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pY29ucy9lZGl0LnN2Z1wiIGFsdD1cIlwiIHRpdGxlPVwiRWRpdCBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhY3Rpb24tYnRuXCI+PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiB0aXRsZT1cIkRlbGV0ZSBTdGVwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKGJ1dHRvbnMpIHtcclxuICAgIGNvbnN0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGFjdGlvbkJ0bnMuY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idG5zXCIpO1xyXG5cclxuICAgIC8vIFByb2plY3QgQnV0dG9uc1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgLy8gQnV0dG9uIENvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGFjdGlvbkJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvblwiLCBcImFjdGlvbi1idG5cIik7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgYWN0aW9uQnRuLnNyYyA9IGJ0bi5zcmM7XHJcbiAgICAgICAgYWN0aW9uQnRuLmFsdCA9IGJ0bi5hbHQ7XHJcbiAgICAgICAgYWN0aW9uQnRuLnRpdGxlID0gYnRuLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgICAgICBhY3Rpb25CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aW9uQnRuKTtcclxuXHJcbiAgICAgICAgYWN0aW9uQnRucy5hcHBlbmRDaGlsZChhY3Rpb25CdXR0b25Db250YWluZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYWN0aW9uQnRucztcclxufSIsIi8qIENyZWF0ZSBhIGxpc3Qgb2Ygc3RlcHMgZm9yIGEgdGFzayAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVN0ZXBzKHN0ZXBzLCBnZW5lcmF0ZUFjdGlvbkJ1dHRvbnMpIHtcclxuICAgIC8qIENyZWF0ZSBhIHN0ZXAgaXRlbSAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwKHN0ZXApIHtcclxuICAgICAgICAvLyBTdGVwIEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHN0ZXBCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgU3RlcFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkNvbG91ciBUYXNrXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIn0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBzdGVwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBzdGVwSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIFN0ZXAgSW5mb3JtYXRpb25cclxuICAgICAgICBjb25zdCBzdGVwSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0ZXBJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbS1pbmZvXCIpO1xyXG5cclxuICAgICAgICAvLyBDb21wbGV0aW9uIENoZWNrYm94XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2stY2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVkQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5uYW1lID0gXCJcIjtcclxuICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5pZCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHN0ZXBJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcclxuXHJcbiAgICAgICAgLy8gU3RlcCBEZXRhaWxzXHJcbiAgICAgICAgY29uc3Qgc3RlcERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic3RlcC1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAvLyBUaXRsZVxyXG4gICAgICAgIGNvbnN0IHN0ZXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBzdGVwVGl0bGUudGV4dENvbnRlbnQgPSBzdGVwLnRpdGxlO1xyXG5cclxuICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgY29uc3Qgc3RlcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBzdGVwRGF0ZS50ZXh0Q29udGVudCA9IHN0ZXAuZHVlRGF0ZSB8fCBcIk5vIER1ZSBEYXRlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdGlvbiBCdXR0b25zIGZvciBTdGVwc1xyXG4gICAgICAgIGNvbnN0IHN0ZXBBY3Rpb25CdXR0b25zID0gZ2VuZXJhdGVBY3Rpb25CdXR0b25zKHN0ZXBCdXR0b25zKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgc3RlcERldGFpbHMuYXBwZW5kQ2hpbGQoc3RlcFRpdGxlKTtcclxuICAgICAgICBzdGVwRGV0YWlscy5hcHBlbmRDaGlsZChzdGVwRGF0ZSk7XHJcblxyXG4gICAgICAgIHN0ZXBJbmZvLmFwcGVuZENoaWxkKHN0ZXBEZXRhaWxzKTtcclxuXHJcbiAgICAgICAgc3RlcEl0ZW0uYXBwZW5kQ2hpbGQoc3RlcEluZm8pO1xyXG4gICAgICAgIHN0ZXBJdGVtLmFwcGVuZENoaWxkKHN0ZXBBY3Rpb25CdXR0b25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ZXBJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0ZXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgc3RlcExpc3QuY2xhc3NMaXN0LmFkZChcInN0ZXAtbGlzdFwiKTtcclxuXHJcbiAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIHN0ZXBMaXN0LmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcChzdGVwKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3RlcExpc3Q7XHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVTdGVwcyBmcm9tIFwiLi9zdGVwR2VuZXJhdG9yXCI7XHJcblxyXG4vKiBDcmVhdGUgYSBsaXN0IG9mIHRhc2tzIGZvciBhIHByb2plY3QgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrcyh0YXNrcywgZ2VuZXJhdGVBY3Rpb25CdXR0b25zKSB7XHJcbiAgICAvKiBDcmVhdGUgYSB0YXNrIGl0ZW0gKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHRoZSBjaGVja2JveCBhbmQgZGV0YWlscyBvZiB0aGUgdGFzayAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGFza0hlYWRlcih0YXNrKSB7XHJcbiAgICAgICAgICAgIC8qIERpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRhc2sgKi9cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRGV0YWlscyh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LXRhc2stZGV0YWlsc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgfHwgXCJObyBEdWUgRGF0ZVwiOztcclxuXHJcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza0RldGFpbHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtSW5mby5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWl0ZW0taW5mb1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbXBsZXRpb24gQ2hlY2tib3hcclxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5uYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guaWQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwZW5kIEVsZW1lbnRzXHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0SXRlbUluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdEl0ZW1JbmZvLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFza0RldGFpbHModGFzaykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0SXRlbUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUYXNrIEJ1dHRvbnMgdG8gYmUgY3JlYXRlZFxyXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b25zID0gW1xyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkFkZCBOZXcgU3RlcFwifSxcclxuICAgICAgICAgICAge3NyYzogXCIuLi9zcmMvYXNzZXRzL2ljb25zL3BhaW50LnN2Z1wiLCBhbHQ6IFwiXCIsIHRpdGxlOiBcIkNvbG91ciBUYXNrXCJ9LFxyXG4gICAgICAgICAgICB7c3JjOiBcIi4uL3NyYy9hc3NldHMvaWNvbnMvZWRpdC5zdmdcIiwgYWx0OiBcIlwiLCB0aXRsZTogXCJFZGl0IFRhc2tcIn0sXHJcbiAgICAgICAgICAgIHtzcmM6IFwiLi4vc3JjL2Fzc2V0cy9pY29ucy9kZWxldGUuc3ZnXCIsIGFsdDogXCJcIiwgdGl0bGU6IFwiRGVsZXRlIFRhc2tcIn0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICAvLyBUYXNrIEluZm9ybWF0aW9uXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtaXRlbVwiKTtcclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIFRhc2sgSW5mb3JtYXRpb24gRWxlbWVudHNcclxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChnZW5lcmF0ZVRhc2tIZWFkZXIodGFzaykpO1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlQWN0aW9uQnV0dG9ucyh0YXNrQnV0dG9ucykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFza0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpO1xyXG5cclxuICAgIC8vIEFkZCBhbGwgdGFza3MgdG8gdGhlIGxpc3RcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RUYXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YXNrLWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0YXNrXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlVGFzayh0YXNrKSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHN0ZXBzXHJcbiAgICAgICAgcHJvamVjdFRhc2tJdGVtLmFwcGVuZENoaWxkKGdlbmVyYXRlU3RlcHModGFzay5zdGVwcywgZ2VuZXJhdGVBY3Rpb25CdXR0b25zKSk7XHJcblxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHByb2plY3RUYXNrSXRlbSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB0YXNrTGlzdDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBjcmVhdGVQcm9qZWN0LCBhZGRUYXNrIH0gZnJvbSBcIi4vaGFuZGxlcnMvb3JnYW5pemVycy9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIGFkZFN0ZXAgfSBmcm9tIFwiLi9oYW5kbGVycy9vcmdhbml6ZXJzL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RlcCB9IGZyb20gXCIuL2hhbmRsZXJzL29yZ2FuaXplcnMvc3RlcFwiO1xyXG5pbXBvcnQgeyByZW5kZXJTaWRlYmFyUHJvamVjdHMgfSBmcm9tIFwiLi9oYW5kbGVycy9kaXNwbGF5XCI7XHJcbmltcG9ydCByZW5kZXJQcm9qZWN0UGFnZSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXVxyXG5wcm9qZWN0cy5wdXNoKGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkpO1xyXG5cclxuLy8gV29yayBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNvbnN0IHdvcmsgPSBjcmVhdGVQcm9qZWN0KFwiV29yayBNZWV0aW5nc1wiLCBcIkFsbCB0aGluZ3Mgd29yayBtZWV0aW5nIHJlbGF0ZWQhXCIsIFwiXCIsIFwiSGlnaFwiLCBcIlRPRE9cIik7XHJcblxyXG5jb25zdCBtZWV0aW5ncyA9IGNyZWF0ZVRhc2soXCJNb25kYXkgTWVldGluZ3NcIiwgXCJBbGwgbW9uZGF5IHdvcmsgbWVldGluZ3NcIiwgXCJcIiwgXCJNZWRcIiwgXCJUT0RPXCIpO1xyXG5jb25zdCBtb3JuTWVldGluZyA9IGNyZWF0ZVN0ZXAoXCJNb3JuaW5nIE1lZXRpbmdcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuY29uc3QgYXJ2b01lZXRpbmcgPSBjcmVhdGVTdGVwKFwiQWZ0ZXJub29uIE1lZXRpbmdcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuYWRkU3RlcChtZWV0aW5ncywgbW9ybk1lZXRpbmcpO1xyXG5hZGRTdGVwKG1lZXRpbmdzLCBhcnZvTWVldGluZyk7XHJcbmFkZFRhc2sod29yaywgbWVldGluZ3MpO1xyXG5cclxuY29uc3QgcHJlc2VudGF0aW9ucyA9IGNyZWF0ZVRhc2soXCJQcmVzZW50YXRpb25cIiwgXCJBbGwgd29yayBwcmVzZW50YXRpb25zXCIsIFwiXCIsIFwiSGlnaFwiLCBcIlRPRE9cIik7XHJcbmNvbnN0IGdyYXBocyA9IGNyZWF0ZVN0ZXAoXCJHZW5lcmF0ZSBGaW5hbmNpYWwgR3JhcGhzXCIsIFwiMjAyMy0xMi0xMFwiLCBcIlRPRE9cIik7XHJcbmNvbnN0IHR5cG9zID0gY3JlYXRlU3RlcChcIkNoZWNrIHJlcG9ydCBkcmFmdCBmb3IgdHlwb3NcIiwgXCIyMDIzLTEyLTEwXCIsIFwiVE9ET1wiKTtcclxuYWRkU3RlcChwcmVzZW50YXRpb25zLCBncmFwaHMpO1xyXG5hZGRTdGVwKHByZXNlbnRhdGlvbnMsIHR5cG9zKTtcclxuYWRkVGFzayh3b3JrLCBwcmVzZW50YXRpb25zKTtcclxuXHJcbi8vIFNjaG9vbCBwcm9qZWN0L3Rhc2tzL3N0ZXBzXHJcbmNvbnN0IHNjaG9vbCA9IGNyZWF0ZVByb2plY3QoXCJTY2hvb2xcIiwgXCJBbGwgdGhpbmdzIHNjaG9vbCByZWxhdGVkIVwiLCBcIjIwMjEtMTEtN1wiLCBcIkhpZ2hcIiwgXCJUT0RPXCIpO1xyXG5cclxucHJvamVjdHMucHVzaCh3b3JrKTtcclxucHJvamVjdHMucHVzaChzY2hvb2wpO1xyXG5cclxuY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG5yZW5kZXJTaWRlYmFyUHJvamVjdHMocHJvamVjdHMpO1xyXG5yZW5kZXJQcm9qZWN0UGFnZShwcm9qZWN0c1sxXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9